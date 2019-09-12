import React, {Component} from 'react';

class User extends Component {
    render() {
        return (
            <ul className="navbar-nav float-right">
                <li className="nav-item dropdown">
                    <a className="nav-link text-nowrap text-white" href="#" id="navbarDropdown"
                       role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-user"></i> Profile
                    </a>
                </li>
            </ul>
        );
    }
}

export default User;