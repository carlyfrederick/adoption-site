import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

class Skills extends Component {
  render() {
    return (
      <div className={'skills'}>
      <img src={'favicon.ico'} alt='icon' height='40' width='40' />
      <div style={{width: '100%'}}>React sample work:</div>
      <Link to='/adoptionpage'>Adoption Page</Link>
      </div>
    );
  }
}

export default Skills;