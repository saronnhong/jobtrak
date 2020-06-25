import React, { Component } from 'react';
import AuthService from '../AuthService';
import axios from 'axios';
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
        return (
            <nav className="#0288d1 light-blue darken-2">
                <div className="nav-wrapper navContainer">
                    <a href="#!" className="brand-logo "><i class="material-icons large">apps</i>JobTrak</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/login"><i className="material-icons">face</i></a></li>
                        <li><a href="/analyze"><i className="material-icons">insert_chart</i></a></li>
                        <li><a onClick={() => this.logOut()}><i className="material-icons">directions_run</i></a></li>
                        <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
                    </ul>
                </div>
            </nav>
        )

    }
}

export default Navbar;