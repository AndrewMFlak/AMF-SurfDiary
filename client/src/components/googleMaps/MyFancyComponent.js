// import React, {Component} from "react";
// import { compose, withProps, lifecycle } from "recompose";
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// const MyMapComponent = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBPXkPNnkgMPqpYXUfGcTXcyyuKEjYnn8A&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap,
//   lifecycle({
//     componentDidMount() {
//       let geocoder = new window.google.maps.Geocoder();
//       geocoder.geocode({'address':this.spot.spotlocation}, function(results, status) {
//           if (status == 'OK') {
//             console.log('here result of geocoder', results);
//           } else {
//             console.log('Geocode was not successful for the following reason: ' + status);
//           }
//         }
//       });
//     }
//   }))((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={new window.google.maps.LatLng(41.8507300, -87.6512600)}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
//   </GoogleMap>
// )

// class MyFancyComponent extends React.PureComponent {
//   state = {
//     isMarkerShown: false,
//   }

//   componentDidMount() {
//     this.delayedShowMarker()
//   }

//   delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }

//   handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false })
//     this.delayedShowMarker()
//   }

//   render() {
//     return (
//       <MyMapComponent
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     )
//   }
// }
import React, { Component } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { compose, withProps, lifecycle } from 'recompose';

export default class MyFancyComponent extends Component {
    render() {

        const MyMapComponent = compose(
            withProps({
                googleMapURL: ('https://maps.googleapis.com/maps/api/js?key=AIzaSyBPXkPNnkgMPqpYXUfGcTXcyyuKEjYnn8A&v=3.exp&libraries=geometry,drawing,place'),
                loadingElement: (<div style={{ height: '100%' }} />),
                containerElement: (<div style={{ height: '400px' }} />),
                mapElement: (<div style={{ height: '100%' }} />)
            }),
            withScriptjs,
            withGoogleMap,
            lifecycle({
                componentDidMount() {
                    let geocoder = new window.google.maps.Geocoder();
                    geocoder.geocode( { 'address': 'Bakerstreet, 2'}, function(results, status) {
                        if (status === 'OK') {
                            console.log('here result of geocoder', results);
                        } else {
                            console.log('Geocode was not successful for the following reason: ' + status);
                        }
                    });
                }
            })
        )(props =>
            <GoogleMap
                defaultZoom={7}
                defaultCenter={new window.google.maps.LatLng(41.8507300, -87.6512600)}
            >
            </GoogleMap>
        );

        return(
            <MyMapComponent/>
        );
    }
}

// export default MyFancyComponent;