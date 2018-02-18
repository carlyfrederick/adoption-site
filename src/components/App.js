import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import * as sizingActions from '../actions/sizingActions';
import LandingPage from './Home/LandingPage';
import AdoptionPage from './AdoptionPage/AdoptionPage';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleWindowResize = this.handleWindowResize.bind(this);
    }

    componentDidMount() {
        if (window) {
            window.addEventListener('resize', this.handleWindowResize);
        }
    }

    componentWillUnmount() {
        if (window) {
            window.removeEventListener('resize', this.handleWindowResize)
        }
    }

    handleWindowResize() {
        if (window.innerWidth <= 700
            && this.props.windowWidth === 'large') {
            this.props.sizingActions.handleResize('small');
        } else if (window.innerWidth > 700
            && this.props.windowWidth === 'small') {
            this.props.sizingActions.handleResize('large');
        }
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route path='/adoptionpage' component={AdoptionPage}/>
            </Switch>
        );
    }
}

App.propTypes = {
    windowWidth: PropTypes.string
};

function mapStateToProps(state) {
    return {
        windowWidth: state.sizing.get('windowWidth'),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sizingActions: bindActionCreators(sizingActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);