import React, { Component } from 'react';
import './App.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.closeForm = this.closeForm.bind(this);
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
                <div
                onTouchTap={ () => this.closeForm() }
                className={'close-form'}>
                X
                </div>
            </div>
          </div>
        );
    }
}

export default Form;
