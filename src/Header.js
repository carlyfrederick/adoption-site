import React, { Component } from 'react';
import './App.css';

const dogs = ['bailey', 'dolce', 'rocco'];

class Header extends Component {
  render() {
    return (<div className={'header'}>
    {
        dogs.map(dog =>
            <div
            key={dog}
            className={`header-photo ${dog}`}>
                <div className={'name'}>{dog}</div>
            </div>
        )
    }
    </div>);
  }
}

export default Header;
