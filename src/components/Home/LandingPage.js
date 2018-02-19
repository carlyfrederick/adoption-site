import React, { Component } from 'react';
import Intro from './Intro';
import SampleWork from './SampleWork';
import '../App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.scrollPage = this.scrollPage.bind(this);
    }

    scrollPage() {
        window.scrollBy(0, 500);
    }

    render() {
        return (
          <div className="landing-page">
            <div
            className={'sample-work-transition'}
            style={{ height: '100vh', width: '100vw' }}>
                <div className="background-photo" />
                <Intro
                scrollPage={this.scrollPage}
                />
            </div>
            <SampleWork />
          </div>
        );
    }
}

export default App;