import React, { Component } from 'react';
import { fromJS } from 'immutable';
import './App.css';

const inputs = [
    {
        name: 'First name',
        required: true,
        placeholder: 'First name',
        form_input: 'first_name',
        type: 'input',
    },
    {
        name: 'Last name',
        required: true,
        placeholder: 'Last name',
        form_input: 'last_name',
        type: 'input',
    },
    {
        name: 'Email',
        required: true,
        placeholder: 'adoptdontshop@gmail.com',
        form_input: 'email',
        type: 'input',
    },
    {
        name: 'Phone number',
        required: false,
        placeholder: '(555) 123-4567',
        form_input: 'phone_number',
        type: 'input',
    },
    {
        name: 'Dog size preference?',
        required: false,
        form_input: 'size_preference',
        options: [
            'no_preference',
            'small',
            'medium',
            'large',
        ],
        type: 'list',
    }
];

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: fromJS({
                first_name: '',
                last_name: '',
                email: '',
                phone_number: '',
                size_preference: 'no_preference',
            })
        };
        this.closeForm = this.closeForm.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.getFormInputs = this.getFormInputs.bind(this);
        this.getInputType = this.getInputType.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
    }

    onFieldChange(event, formInput) {
        const { value } = event.target;
        let entry = value;
        if (!entry) entry = '';
        const { form } = this.state;
        let newForm = form;
        newForm = newForm.set(formInput, entry);
        this.setState({
            form: newForm,
        });
    }

    getFormInputs() {
        let formEntries = [];
        inputs.forEach((input, i) => {
            formEntries.push(
                <div
                key={input.form_input}
                style={{
                    width: '100%',
                    display: 'inline-block',
                    margin: i === 0 ?
                        '20px 0px 5px 0px' :
                        '10px 0px',
                }}>
                    { input.name }
                    {
                        input.required ?
                        <span style={{color: 'red'}}> *</span> : null
                    }
                    { this.getInputType(input, i) }
                </div>
            )
        });
        return formEntries;
    }

    getInputType(input, i) {
        const { form } = this.state;
        switch (input.type) {
            case 'input':
                return <input
                    type='text'
                    autoFocus={i === 0}
                    name={input.name}
                    onChange={e => this.onFieldChange(e, input.form_input)}
                    placeholder={input.placeholder}
                    value={form.get(input.form_input)}
                    style={{
                        display: 'block',
                        width: 'calc(100% - 40px)',
                        padding: 10,
                        marginTop: 5,
                        marginLeft: 5,
                    }}
                />;
            case 'list': {
                const list = [];
                input.options.forEach(option => {
                    let lbs = '';
                    if (option === 'small') {
                        lbs = ' (5-10lbs)';
                    } else if (option === 'medium') {
                        lbs = ' (10-50lbs)';
                    } else if (option === 'large') {
                        lbs = ' (50+lbs)';
                    }
                    list.push(<label
                        style={{
                            display: 'block',
                            margin: '10px 0px 10px 10px',
                        }}
                        key={option}>
                        <input
                        name={option}
                        type="radio"
                        value={option}
                        checked={form.get('size_preference') === option}
                        onChange={e => this.onFieldChange(e, input.form_input)} />
                            <div
                            style={{
                                marginTop: -2,
                                marginLeft: 5,
                                display: 'inline-block',
                                fontSize: '12px'
                            }}>
                                {option.replace(/_/g, ' ')}
                                {lbs}
                            </div>
                    </label>)
                });
                return list;
            }
            default:
                return null;
        }
    }

    closeForm() {
        this.props.formActions.closeForm();
    }

    isFormValid() {
        const { form } = this.state;
        const hasName = form.get('first_name').length > 0
            && form.get('last_name').length > 0;
        const hasEmail = form.get('email').indexOf('@') > -1
            && form.get('email').length > 3;
        return hasName && hasEmail;
    }

    render() {
        if (!this.props.formOpen) return null;
        const canSubmit = this.isFormValid();
        return (
          <div
          className={'form-root'}>
            <div
            className={'form'}>
                <div style={{ height: 30, width: '100%' }}>
                    <div style={{
                        textTransform: 'uppercase',
                        letterSpacing: '5px',
                        display: 'inline-block'
                    }}>Adoption Application</div>
                    <div
                    onTouchTap={ () => this.closeForm() }
                    className={'close-form'}>
                    &#10005;
                    </div>
                </div>
                <div style={{
                    borderTop: '1px solid gray',
                    maxHeight: 'calc(100% - 100px)',
                    height: 'calc(100% - 60px)',
                    overflowY: 'auto'
                }}>
                    { this.getFormInputs() }
                </div>
                <div style={{ height: 70, width: '100%' }}>
                    <div
                    id={ canSubmit ? 'button-hover' : null }
                    className={'button'}
                    style={{
                        cursor: canSubmit ? 'pointer' : 'default',
                        height: 44,
                        width: 130,
                        lineHeight: '44px',
                        left: 'calc(50% - 75px)',
                        opacity: canSubmit ? 1.0 : 0.5,
                        marginTop: 10
                    }}
                    onTouchTap={canSubmit ?
                        this.closeForm : null
                    }>
                        Submit
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

export default Form;
