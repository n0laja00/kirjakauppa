import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export default function Maps() {
    render() {
        return (
            <Map
                className="mapStyle"
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            >
                <Marker position={{ lat: 48.00, lng: -122.00}} />
                </Map>
        );
      }
      export default GoogleApiWrapper({
        apiKey: 'TOKEN HERE'
      })(MapContainer);
}
