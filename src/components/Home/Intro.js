import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GitHub from '../assets/GitHub-Mark-64px.png';
import LinkedIn from '../assets/In-2C-66px-R.png';
import CodeIcon from '../assets/code-icon.png';
import '../App.css';

class Intro extends Component {
  render() {
    return (
      <div className={'intro'}>
        <div style={{fontSize: '52px', letterSpacing: '3px'}}>
            Carly Frederick
        </div>
        <div style={{marginTop: 10, fontSize: '30px' }}>
            Front End Developer
        </div>
        <div style={{marginTop: 20, display: 'inline-block'}}>
            <div style={{display: 'inline-block', margin: '0px 10px'}}>
                <Link to='./adoptionpage'>
                    <img
                    title={'Sample Work'}
                    src={CodeIcon}
                    alt={'Sample Work'}
                    height={30}
                    width={30}
                    />
                </Link>
            </div>
            <div style={{display: 'inline-block', margin: '0px 10px'}}>
                <a title={'LinkedIn'} href='https://www.linkedin.com/in/carly-frederick-4b7154a1/'>
                    <img
                    src={LinkedIn}
                    alt={'LinkedIn'}
                    height={30}
                    width={35}
                    />
                </a>
            </div>
            <div style={{display: 'inline-block', margin: '0px 10px'}}>
                <a title={'GitHub'} href='https://github.com/carlyfrederick'>
                    <img
                    src={GitHub}
                    alt={'GitHub'}
                    height={30}
                    width={30}
                    />
                </a>
            </div>
        </div>
      </div>
    );
  }
}

export default Intro;