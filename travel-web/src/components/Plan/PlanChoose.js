import React, {Component} from 'react';

class PlanChoose extends Component {
    render() {
        return (
            <div className="form-group">
                <label className="text-white">My Plan</label>
                <input type="email" className="form-control" placeholder="my plan"></input>
            </div>
        );
    }
}

export default PlanChoose;