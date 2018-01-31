import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import LandingPage from './LandingPage';
import AdoptionPage from './AdoptionPage';
import './App.css';

class App extends Component {
  render() {
    return (
        <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/adoptionpage' component={AdoptionPage}/>
        </Switch>
    );
  }
}

export default App;