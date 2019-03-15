import React, { Component } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { compose, withProps, lifecycle } from 'recompose';
require('dotenv').config({ path: __dirname + '/.env' });
// "build": "react-scripts build",


class MyFancyComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            address: this.address,
            lat: 45.99407,
            lng: -123.919997
        };
    }
    render() {
        const MyMapComponent = compose(
            withProps({
                googleMapURL: ('https://maps.googleapis.com/maps/api/js?key=' + process.env.REACT_APP_GoogleAPIKEY + '&v=3.exp&libraries=geometry,drawing,places'),
                loadingElement: (<div style={{ height: '100%' }} />),
                containerElement: (<div style={{ height: '400px' }} />),
                mapElement: (<div style={{ height: '100%' }} />),
            }),
            withScriptjs,
            withGoogleMap,
            lifecycle({
                componentDidMount() {
                    let geocoder = new window.google.maps.Geocoder();
                    geocoder.geocode({ 'address': '605 Jersey Ave, Jersey City, NJ. 07302' }, function (results, status) {
                        if (status === 'OK') {
                            if (status !== 'ZERO_RESULTS') {
                                let coords = results[0].geometry.location.toJSON();
                                console.log(coords);
                                this.setState({
                                    currentLocation: {
                                        lat: coords.lat,
                                        lng: coords.lng
                                    }
                                })
                                let lat = coords.lat;
                                let lng = coords.lng;

                                console.log("lat: ", lat);
                                console.log("lng: ", lng)
                                // this works fine

                            } else {
                                alert("No google maps results found!  Check your Location or be more specific");
                            }
                        } else {
                            alert("Geocode was not successful for the following reason: " + status);
                        }
                    });
                },
                // componentWillReceiveProps(props,lat,lng) {
                //     this.props.lat,
                //     this.props.lng,

                // }
            })
        )(props =>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={new window.google.maps.LatLng(this.state.lat, this.state.lng)}
            >
            </GoogleMap>
        );

        return (
            <MyMapComponent />
        );
    }
}

export default MyFancyComponent;