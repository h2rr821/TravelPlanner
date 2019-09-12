import React, {Component}from "react"
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';

class MapContainer extends Component {

    //https://medium.com/@imranhsayed/google-maps-in-react-autocomplete-location-search-draggable-marker-marker-infobox-565ab8e8cf22
    
    render() {

        const mapStyles = {
            width: '800px',
            height: '800px',
        };

        return (
            <Map
                google={this.props.google}
                zoom={10}
                style={mapStyles}
                center={{ lat: this.props.lat, lng: this.props.lng}}
                initialCenter={{ lat: this.props.lat, lng: this.props.lng}}
            >
                <Marker position={{ lat: this.props.lat, lng: this.props.lng}} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: '...'
})(MapContainer);
