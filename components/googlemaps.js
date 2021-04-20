import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 50.98,
      lng: -113.97
    },
    zoom: 15,
  };
 
  render() {
    return (
      <div style={{ height: '40vh', width: '40%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCz3NXsO5UwBofWVqsWautPzyb3bacNYPs' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={50.98}
            lng={-113.97}
            text="Location"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;