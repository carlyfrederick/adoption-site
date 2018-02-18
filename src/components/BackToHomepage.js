import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class BackToHomepage extends Component {
  render() {
    return (<div className={'back-wrapper'}>
        <Link to='/' style={{
            textDecoration: 'none',
            color: 'gray',
            fontSize: '20px'
        }}>
        &#8678;
        </Link>
    </div>);
  }
}

export default BackToHomepage;