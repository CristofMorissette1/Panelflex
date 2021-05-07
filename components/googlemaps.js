import React, { Component } from 'react';
import {Marker, Map, GoogleApiWrapper} from 'google-maps-react';
 
class SimpleMap extends Component {

 
  render() {
    return (
      <div>
          <div className="mapsContainer">
        <Map className='maps_container'
              google={this.props.google}
              initialCenter={{
                lat: 50.9877125,
                lng: -113.9761666
              }}
              zoom={18}
            >
                <Marker  
                  position={{
                    lat: 50.9877125,
                lng: -113.9761666
                  }}     
                />
            </Map>
            </div>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
    apiKey: ('AIzaSyCz3NXsO5UwBofWVqsWautPzyb3bacNYPs')
  })(SimpleMap)