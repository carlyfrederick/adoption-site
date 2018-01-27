import React, { Component } from 'react';
import './App.css';

class Body extends Component {
  render() {
    return (<div
        style={{
            borderTop: '1px solid gray',
            borderBottom: '1px solid gray',
            padding: '30px 20px',
            margin: 20,
        }}>
            <div style={{ textTransform: 'uppercase' }}>
                {'Looking for a furever friend?'}
            </div>
            <br />
            <br />
            {'Animal shelters and rescue groups are brimming with happy, \
                healthy pets just waiting for someone to take them home.' }
            <br />
            <br />
            {'When you adopt, you save a loving animal by making them  \
                part of your family and open up shelter space for another \
                animal who might desperately need it.'}
            <br />
            <br />
            {'Interested in adopting? Start your application today!'}
    </div>);
  }
}

export default Body;
