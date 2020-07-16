import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    const logOutFunc = () => {
        props.logOutFunc()
    }
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">React Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Create</NavLink></li>
                    <li><NavLink to="/links">Links</NavLink></li>
                    <li><NavLink to="/detail/:id">Details</NavLink></li>
                    <li><a href="/" onClick={logOutFunc} className='btn'> Log out</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar