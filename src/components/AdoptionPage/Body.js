import React, { Component } from 'react';
import GMaps from 'gmaps';
import '../App.css';

const initLatLong = {
    lat: 43.0731,
    lng: -89.4012,
};

class Body extends Component {
    componentDidMount() {
        const map = new GMaps(Object.assign({}, {
            div: '#adoption-map',
        }, initLatLong));

        map.addMarker({
            lat: 43.065186,
            lng: -89.391011,
            title: 'Local Humane Society',
            infoWindow: {
                content: '<p>Local Humane Society</p><p>(608) 555 - 1234</p>'
            }
        });
        map.addMarker({
            lat: 43.085562,
            lng: -89.360576,
            title: 'Madison Animal Shelter',
            infoWindow: {
                content: '<p>Madison Animal Shelter</p><p>(608) 555 - 5678</p>'
            }
        });
        map.fitZoom();
    }

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
                <br />
                <br />
                                <br />
                <div style ={{textTransform: 'uppercase', textAlign: 'center'}}>
                    {'Our shelter locations'}
                </div>
                <br />
                <div id={'adoption-map'}></div>
        </div>);
    }
    }

export default Body;
