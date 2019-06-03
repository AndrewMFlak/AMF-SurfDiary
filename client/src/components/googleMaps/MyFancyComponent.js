import React, {Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { compose, withProps, lifecycle } from 'recompose';
require('dotenv').config({ path: __dirname + '/.env' });
// "build": "react-scripts build",


class MyFancyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '4453 Willow Cove, Ct. Orlando, FL. 32835',
            // lat: 28.498322,
            lat: '',
            // lng: -81.796944
            lng: ''
        };
    }
    
    render() {
        // console.log('spotLocation: ' & this.props.spots.spotLocation);
        // console.log('addressCheck: ' & this.props.spots.address);
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
                    // geocoder.geocode({ 'address': 'Hideaway Beach, Princeville, HI 96722' }, function (results, status) {
                    geocoder.geocode({ 'address': '4453 Willow Cove, Ct. Orlando, FL. 32835' }, function (results, status) {
                        if (status === 'OK') {
                            if (status !== 'ZERO_RESULTS') {
                                let coords = results[0].geometry.location.toJSON();
                                // console.log(coords);
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
                defaultZoom={12}
                defaultCenter={new window.google.maps.LatLng(this.state.lat, this.state.lng)}
            >
                {/* {props.isMarkerShown && <Marker position={{lat:this.state.lat, lng:this.state.lng}} onClick={props.onMarkerClick}/>} */}
            </GoogleMap>
        );

        return (
            <MyMapComponent />
        );
    }
}

export default MyFancyComponent;
