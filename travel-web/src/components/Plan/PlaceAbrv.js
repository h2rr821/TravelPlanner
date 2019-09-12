import React, {Component} from 'react';

class PlaceAbrv extends Component {
    render() {
        return (

            <div>
                <a href="#"
                   className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{`${this.props.name}`}</h5>
                        <small className="text-muted">{`${this.props.day}`}</small>
                    </div>
                    <p className="mb-1">{`${this.props.address}`}</p>
                    <small className="text-muted">{`${this.props.description}`}</small>
                </a>
            </div>
        );
    }
}

export default PlaceAbrv;