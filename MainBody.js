import React, {Component} from 'react';
import Plan from "./Plan/Plan"
import ChoiceList from "./Details/ChoiceList"
import {GoogleApiWrapper} from "google-maps-react"
import MapContainer from "./MapContainer";

class MainBody extends Component {

    render() {

        return (
            <main role="main" className="main">
                <div className="album bg-white">
                    <div className="container">
                        <div className="row ml-1">
                            <Plan />
                            <MapContainer lat={this.props.lat} lng={this.props.lng}/>
                        </div>
                    </div>
                </div>
                <ChoiceList />
            </main>
        );
    }
}

export default MainBody;