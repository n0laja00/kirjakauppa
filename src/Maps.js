import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
      

export class MapContainer extends Component {
        state = {
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {},

          mapCenter: {
                  lat: 64.06470711212933,
                  lng: 23.63987559178628
          }
        };
       
        onMarkerClick = (props, marker, e) =>
          this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
          });
       
        onMapClicked = (props) => {
          if (this.state.showingInfoWindow) {
            this.setState({
              showingInfoWindow: false,
              activeMarker: null
            })
          }
        };
       
        render() {
          return (
            <Map google={this.props.google}
                style={{width: '26%', height: '20%', position: 'relative'}}
                className={'map'}
                zoom={15}
                initialCenter={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                }}
                center={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                }}>
              <Marker
              position={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
              }}
              />
            </Map>
          )
        }
      }

export default GoogleApiWrapper({
        apiKey: ('AIzaSyCwdzg6cY1ZpoXbLdSk5U3Btu4x0qexV_c')
      })(MapContainer)

