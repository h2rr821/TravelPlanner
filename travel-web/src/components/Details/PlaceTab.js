import React, {Component} from 'react';

class PlaceTab extends Component {
    render() {
        return (
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img src={this.props.img} width="100%"
                             height="225" background="#55595c" color="#eceeef" className="card-img-top"
                             text="Thumbnail"/>
                        <div className="card-body">
                            <p className="card-text">{this.props.description}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button"
                                            className="btn btn-sm btn-outline-secondary">View
                                    </button>
                                    <button type="button"
                                            className="btn btn-sm btn-outline-secondary">Edit
                                    </button>
                                </div>
                                <small className="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default PlaceTab;