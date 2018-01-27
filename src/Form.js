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
                size_preference: '',
            })
        };
        this.closeForm = this.closeForm.bind(this);
        //this.onFieldChange = this.onFieldChange.bind(this);
        this.getFormInputs = this.getFormInputs.bind(this);
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
                        '15px 0px 5px 0px' :
                        '5px 0px',
                }}>
                    { input.name }
                    {
                        input.required ?
                        <span style={{color: 'red'}}> *</span> : null
                    }
                </div>
            )
        });
        return formEntries;
    }

    closeForm() {
        this.props.formActions.closeForm();
    }

    render() {
        if (!this.props.formOpen) return null;
        return (
          <div
          className={'form-root'}>
            <div
            className={'form'}>
                Adoption Application
                <div
                onTouchTap={ () => this.closeForm() }
                className={'close-form'}>
                X
                </div>
                <div style={{ borderTop: '1px solid gray', marginTop: 20 }}>
                    { this.getFormInputs() }
                </div>
            </div>
          </div>
        );
    }
}

export default Form;
