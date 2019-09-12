import React, {Component} from 'react';
import PropTypes from "prop-types"
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGooglePlacesSuggest from "react-google-places-suggest";
import Geocode from "react-geocode";
const API_KEY = ".....";
Geocode.setApiKey(API_KEY);
 
// Enable or disable logs. Its optional.
Geocode.enableDebug();


class SearchBar extends React.Component {
    
    state = {
        search: "",
        value: "",

    }

    handleInputChange(e) {
        this.setState({search: e.target.value, value: e.target.value});
    }

    handleSelectSuggest(suggest) {
        
        const {formatted_address} =suggest;
        //console.log(suggest);
        this.setState({search: "", value: formatted_address});
        //console.log("you search: ",formatted_address );
        
        // Get latidude & longitude from address.
        Geocode.fromAddress(formatted_address).then(

            response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
                this.props.handleNewSelect(lat,lng);
                },
                error => {
                   
                    console.error(error);
                }
        );

    }

    render() {

        const {search, value} = this.state

        return (
    
                <ReactGoogleMapLoader
                    params={{
                    key: API_KEY,
                    libraries: "places,geocode",
                    }}
                    render={googleMaps =>
                    googleMaps && (
                    <div>
                    <ReactGooglePlacesSuggest
                        autocompletionRequest={{input: search}}
                        googleMaps={googleMaps}
                        onSelectSuggest={this.handleSelectSuggest.bind(this)}
                    >
                        <input style={{width: 300 }}
                        type="text"
                        value={value}
                        placeholder="Search City"
                        onChange={this.handleInputChange.bind(this)}
                        />
                    </ReactGooglePlacesSuggest>
                    </div>
                    )
                   }
                />
               
       )//end of render

    }//end of return 


}//end of SearchBar class

SearchBar.propTypes = {
  googleMaps: PropTypes.object,
}

export default SearchBar