import React, { Component } from 'react';
import Skills from './Skills';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="landing-page">
            <div className="banner">
                <div className="initials">c f</div>
            </div>
            <div className="background-photo" />
            <div className="intro">
                Hi, I'm Carly. I design and build clean user interfaces.
            </div>
            <Skills />
      </div>
    );
  }
}

export default App;