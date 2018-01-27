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
            style={{
                height: 500,
                width: 500,
                backgroundColor: 'white',
                position: 'absolute',
                left: 'calc(100% - 250px)'
            }}>
                test
            </div>
          </div>
        );
    }
}

export default Form;
