import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as formActions from '../../actions/formActions';
import Header from './Header';
import Body from './Body';
import Form from './Form';
import ConfirmationDialog from './ConfirmationDialog';
import ApplicationButton from './Button';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className={'adoption-page'}>
        <div className={'wrapper'}>
            <Header />
            <Body />
            <ApplicationButton {...this.props}/>
            <Form {...this.props}/>
            {
                this.props.showConfirmation ?
                <ConfirmationDialog {...this.props}/> : null
            }
        </div>
      </div>
    );
  }
}

App.propTypes = {
    formActions: PropTypes.object,
    form: PropTypes.array
};

function mapStateToProps(state) {
    return {
        formOpen: state.form.get('formOpen'),
        showConfirmation: state.form.get('showConfirmation'),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        formActions: bindActionCreators(formActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);