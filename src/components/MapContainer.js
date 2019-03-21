import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { formatCurrency } from '../shared/utils';
import RedMarker from '../assets/images/marker-red.png';
import BlueMarker from '../assets/images/marker-blue.png';
class MapContainer extends Component {

    renderMarkers = (data, minRevenue) => {
        return data.map(e => {
            let icon = (e.revenue > minRevenue) ? BlueMarker : RedMarker;

            return <Marker title={`${e.name} - ${formatCurrency(e.revenue)}`} icon={icon} position={{ lat: e.latitude, lng: e.longitude }} />
        })
    }

    render() {
        const { data, google, minRevenue } = this.props;
        const style = {
            width: 640,
            height: 500
        }
        return (
            <Map containerStyle={{position: 'relative'}} style={style} initialCenter={{ lat: -23.587897, lng: -46.6534671 }} google={google} zoom={12}>
                {this.renderMarkers(data, minRevenue)}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyApmmEmFuD-6wE06KTGcLqn2xUdY6t3qwU'
})(MapContainer);