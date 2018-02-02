import React, { Component } from 'react';
import Intro from './Intro';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="background-photo" />
        <Intro />
      </div>
    );
  }
}

export default App;