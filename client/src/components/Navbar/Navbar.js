import React from 'react';
import "./style.css";

const Navbar = () => {
    return (
        <nav className="#0288d1 light-blue darken-2">
            <div className="nav-wrapper navContainer">
                <a href="#!" className="brand-logo "><i class="material-icons large">apps</i>JobTrak</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="sass.html"><i className="material-icons">search</i></a></li>
                    <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
                    <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
                    <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;