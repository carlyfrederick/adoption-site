import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class BackToHomepage extends Component {
  render() {
    return (
      <div className={'back-wrapper'}>
      <Link to='/'>Back to homepage</Link>
      </div>
    );
  }
}

export default BackToHomepage;