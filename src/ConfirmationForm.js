import React, { Component } from 'react';
import './App.css';

class ConfirmationForm extends Component {
    componentDidMount() {
        setTimeout((() => {
            this.props.formActions.closeConfirmation()}),
            3000);
    }

    render() {
        return (
          <div
          className={'form-root'}>
            <div
            className={'small-form'}>
                <div
                style={{
                    display: 'table-cell',
                    textAlign: 'center',
                    verticalAlign: 'middle'
                }}>
                    Application submitted.
                    <div
                    style={{
                        color: 'green',
                        fontSize: '40px',
                        margin: 20
                    }}>
                    &#10003;
                    </div>
                    We will be in touch shortly!
                </div>
            </div>
          </div>
        );
    }
}

export default ConfirmationForm;
