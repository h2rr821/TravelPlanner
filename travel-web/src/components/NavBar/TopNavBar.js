import React, {Component} from 'react';
import SearchBar from "./SearchBar"
import User from "./User"

class TopNavBar extends Component {

    handleNewSelect=(lat, lng)=>{
        this.props.handleNewSelect(lat,lng);

    }
    

    render() {
        return (
            <header>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
                    <div className="container">
                        <a className="navbar-brand text-white ml-1" href="#">
                            <i className="fas fa-chess-king mr-1"></i>KingPlanner
                        </a>
                        <SearchBar handleNewSelect={this.handleNewSelect}/>
                        <User />
                    </div>
                </nav>
            </header>
        );
    }
}

export default TopNavBar;