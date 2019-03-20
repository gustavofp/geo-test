import React, { Component } from 'react';
import { GoogleApiWrapper, Map, InfoWindow, Marker } from 'google-maps-react';

class MapContainer extends Component {

    renderMarkers = (data, minRevenue) => {
        return data.map(e => {
            let icon = e.revenue > minRevenue ? `assets/images/marker-blue.png` : `assets/images/marker-red.png`;

            return <Marker title={e.name} icon={icon} position={{ lat: e.latitude, lng: e.longitude }}/>
        })
    }

    render() { 
        const { data, google } = this.props;

        return ( 
            <Map initialCenter={{ lat: -23.587897, lng: -46.6534671}} google={google} zoom={12}>
                { this.renderMarkers(data) }
            </Map>  
         );
    }
}
 
export default GoogleApiWrapper({
    apiKey: 'AIzaSyApmmEmFuD-6wE06KTGcLqn2xUdY6t3qwU'
  })(MapContainer);