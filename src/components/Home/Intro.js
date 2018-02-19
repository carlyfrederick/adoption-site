import React, { Component } from 'react';
import GitHub from '../assets/GitHub-Mark-64px.png';
import LinkedIn from '../assets/In-2C-66px-R.png';
import '../App.css';

class Intro extends Component {
    render() {
        const { scrollPage } = this.props;
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
            <div
            onTouchTap={() => scrollPage()}
            style={{
                marginTop: 60,
                cursor: 'pointer'
            }}>discover cool work here</div>
            <div
            onTouchTap={() => scrollPage()}
            style={{
                cursor: 'pointer',
                color: 'black',
                marginTop: -15,
                fontSize: '35px',
            }}>&#8964;</div>
          </div>
        );
    }
}

export default Intro;