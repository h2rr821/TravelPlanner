import React, {Component} from 'react';
import PlaceTab from "./PlaceTab";

class ChoiceList extends Component {
    render() {
        return (
            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row">
                        <PlaceTab img={"architecture-buildings-canada-2478248.jpg"}
                                  description={'This is a wider card with supporting text below as a\n' +
                                  '                       natural lead-in to additional content. This content is a little bit\n' +
                                  '                       longer.'} />
                        <PlaceTab img={"../../styles/architecture-buildings-canada-2478248.jpg"}
                                  description={'This is a wider card with supporting text below as a\n' +
                                  '                       natural lead-in to additional content. This content is a little bit\n' +
                                  '                       longer.'} />
                        <PlaceTab img={"../../styles/architecture-buildings-canada-2478248.jpg"}
                                  description={'This is a wider card with supporting text below as a\n' +
                                  '                       natural lead-in to additional content. This content is a little bit\n' +
                                  '                       longer.'} />
                    </div>
                </div>

                <p className="float-right mr-5">
                    <a href="#">Back to top</a>
                </p>
            </div>
        );
    }
}

export default ChoiceList;