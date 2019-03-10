import React, { Component } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { compose, withProps, lifecycle } from 'recompose';
require('dotenv').config({path:__dirname+'/.env'});
// "build": "react-scripts build",


class MyFancyComponent extends Component {
    render() {

        const MyMapComponent = compose(
            withProps({
                googleMapURL: ('https://maps.googleapis.com/maps/api/js?key='+process.env.REACT_APP_GoogleAPIKEY+'&v=3.exp&libraries=geometry,drawing,place'),
                loadingElement: (<div style={{ height: '100%' }} />),
                containerElement: (<div style={{ height: '400px' }} />),
                mapElement: (<div style={{ height: '100%' }} />)
            }),
            withScriptjs,
            withGoogleMap,
            lifecycle({
                componentDidMount() {
                    let geocoder = new window.google.maps.Geocoder();
                    geocoder.geocode({ 'address': '60 N ROOSEVELT DR. SEASIDE, OR 97138' }, function (results, status) {
                        if (status === 'OK') {
                            if (status !== 'ZERO_RESULTS') {
                                let coords = results[0].geometry.location.toJSON();
                                // this.setState({
                                //     lat: results[0].geometry.location.lat(),
                                //     lng: results[0].geometry.location.lng()
                                // })
                                console.log(coords);
                                let lat = results[0].geometry.location.lat();
                                let lng = results[0].geometry.location.lng();
                                
                                console.log("lat: ",lat);
                                console.log("lng: ",lng)
                                // this works fine
                                
                            } else {
                                alert("No google maps results found!  Check your Location or be more specific");
                            }
                        } else {
                            alert("Geocode was not successful for the following reason: " + status);
                        }
                    });
                }
            })
        )(props =>
            <GoogleMap
                defaultZoom={6}
                defaultCenter={new window.google.maps.LatLng(this.lat,this.lng)}
            >
            </GoogleMap>
        );

        return (
            <MyMapComponent />
        );
    }
}

export default MyFancyComponent;