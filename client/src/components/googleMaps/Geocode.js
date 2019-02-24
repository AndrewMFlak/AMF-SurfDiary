import React from "react"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) => {

  let geocoder = new google.maps.Geocoder();

  if (geocoder) {
    geocoder.geocode( { 'address': props.address}, function(results, status) {

      if (status == google.maps.GeocoderStatus.OK) {
        if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {

          var coords = results[0].geometry.location.toJSON();

          // this works fine
          console.log(coords)

        } else {
          alert("No google results found!  Check your Location or be more specific");
        }
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

}))

export default Map
