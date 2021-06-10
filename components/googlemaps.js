import React, { Component } from 'react';
import {Marker, Map, GoogleApiWrapper} from 'google-maps-react';
 
class SimpleMap extends Component {

 
  render() {
    return (

      <div style={{ height: '40vh', width: '40%' }}>
        {/* <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCz3NXsO5UwBofWVqsWautPzyb3bacNYPs' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={50.98}
            lng={-113.97}
            text="Location"
          />
        </GoogleMapReact> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.5390454879494!2d-113.97836368404182!3d50.987710356387126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717a10e884e391%3A0x9dcbb65b217f9470!2sPanelflex!5e0!3m2!1sen!2sca!4v1620595862278!5m2!1sen!2sca" width="1050" height="450" style={{border: 0, marginLeft: "42.5%", position: "absolute", top: "170%"}} allowfullscreen="" loading="lazy"></iframe>
        </div>
/* //       <div>
//           <div className="mapsContainer">
//         <Map className='maps_container'
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
      </div> */
    );
  }
}
 
export default GoogleApiWrapper({
    apiKey: ('AIzaSyCz3NXsO5UwBofWVqsWautPzyb3bacNYPs')
  })(SimpleMap)