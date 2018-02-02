import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Intro extends Component {
  render() {
    return (
      <div className={'intro'}>
        <div style={{fontSize: '52px', letterSpacing: '3px'}}>Carly Frederick</div>
        <div style={{marginTop: 10, fontSize: '30px' }}>Front End Developer</div>
        <div style={{marginTop: 20, display: 'inline-block'}}>
            <div style={{display: 'inline-block'}}><a href='https://www.linkedin.com/in/carly-frederick-4b7154a1/'>LinkedIn</a></div>
            <div style={{fontSize: '20px', margin: 10, display: 'inline-block'}}>&#x2666;</div>
            <div style={{display: 'inline-block'}}><Link to='/adoptionpage'>Sample Work (React)</Link></div>
            <div style={{fontSize: '20px', margin: 10, display: 'inline-block'}}>&#x2666;</div>
            <div style={{display: 'inline-block'}}><a href='https://github.com/carlyfrederick'>GitHub</a></div>
        </div>
      </div>
    );
  }
}

export default Intro;