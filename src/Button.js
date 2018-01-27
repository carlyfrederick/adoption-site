import React, { Component } from 'react';
import './App.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.openForm = this.openForm.bind(this);
    }

    openForm() {
        this.props.formActions.openForm();
    }

    render() {
        return (
          <div
          className={'button'}
          onTouchTap={() => this.openForm()}>
            Get started
          </div>
        );
    }
}

export default Button;
