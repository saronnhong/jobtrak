import React, { Component } from 'react';
import AuthService from '../AuthService';
import "./style.css";

class Navbar extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }
    logOut = () => {
        this.Auth.logout();
    }
    
    
        
    
    render() {
        const isLoggedIn = localStorage.getItem('id_token');
        return (
            <nav className="#0288d1 light-blue darken-2">
                <div className="nav-wrapper navContainer">
                    <a href="#!" className="brand-logo "><i class="material-icons large">apps</i>JobTrak</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/tracker">Tracker</a></li>
                        {/* <li><a href="/contacts">Contacts</a></li>
                        <li><a href="/tasks">Tasks</a></li>
                        <li><a href="/analyze">Analytics</a></li> */}
                        <li>
                            {isLoggedIn ? <a onClick={() => this.logOut()}>Log Out</a> : <a href="/login">Log In</a>}
                        </li>
                        <li><a href="#"><i className="material-icons">more_vert</i></a></li>

                    </ul>
                </div>
            </nav>
        )

    }
}

export default Navbar;