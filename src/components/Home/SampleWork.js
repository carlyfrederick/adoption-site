import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Project1 from '../assets/project-1.png';
import '../App.css';

class SampleWork extends Component {
    constructor(props) {
        super(props);
        this.listenForScroll = this.listenForScroll.bind(this);
    }

    componentDidMount() {
        if (window) {
            window.addEventListener('scroll', this.listenForScroll);
        }
    }

    componentWillUnmount() {
        if (window) {
            window.removeEventListener('scroll', this.listenForScroll);
        }
    }

    listenForScroll() {
        if (window.scrollY > 50) {
            const fadeDiv = document.getElementById('project');
            fadeDiv.className = 'fade-in';
        }
    }

    render() {
        return (
            <div
            style={{
                width: '100%',
                borderTop: '2px solid black',
            }}>
                <div
                id={'project'}
                style={{
                    width: '50%',
                    margin: 20,
                    display: 'inline-block'
                }}>
                    <Link to='/adoptionpage'>
                        <img
                        alt={'Adoption Project'}
                        style={{ cursor: 'pointer', maxWidth: 500 }}
                        width={'100%'}
                        src={Project1}/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default SampleWork;