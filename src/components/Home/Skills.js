import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

class Skills extends Component {
  render() {
    return (
      <div className={'skills'}>
      <Link to='/adoptionpage'>Adoption Page</Link>
      </div>
    );
  }
}

export default Skills;