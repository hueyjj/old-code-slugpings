import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import "../styles/GoogleMap.css";

import Marker from "../components/Marker";

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,
  }}>
    {text}
  </div>
);

class GoogleMap extends Component {
  static defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11
  };

  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
    this._genMarkers = this._genMarkers.bind(this);
  }

  _onClick({ x, y, lat, lng, event }) {
    const { pushMarker } = this.props;
    pushMarker({ x, y, lat, lng });
  }

  _genMarkers() {
    const { map } = this.props;
    return map.markers.map((marker, index) => {
      return (
        <Marker
          key={"marker-" + index}
          lat={marker.lat}
          lng={marker.lng}
          text={"lat: " + marker.lat + " lng " + marker.lng}
        />
      )
    });
  }

  render() {
    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAbDBAOO2E-5onre2peQuHTcaOtn1dav6k",
            language: 'en',
            region: 'us',
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={this._onClick}
        >
          {this._genMarkers()}
          {/* <Marker
            lat={59.955413}
            lng={30.337844}
            text={'Place'}
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;