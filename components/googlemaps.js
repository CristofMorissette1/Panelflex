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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.0203286284736!2d-113.9761666!3d50.9877125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717a1dab718031%3A0x6573c7f4eb354268!2s4511%20Glenmore%20Trail%2C%20Calgary%2C%20AB%20T2C%202R9%2C%20Canada!5e0!3m2!1sen!2s!4v1620412633632!5m2!1sen!2s" width="600" height="250" style={{border: 0, marginLeft: "50%", position: "absolute"}} allowfullscreen="" loading="lazy"></iframe>
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