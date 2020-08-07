import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    const logOutFunc = () => {
        localStorage.removeItem('storeData')
    }
    return (
        <div className="row">
        <nav>
            <div className="nav-wrapper blue darken-2">
                <span href="#" className="brand-logo" style={{paddingLeft:'10px'}}>M.E.R.N. Logo</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Create</NavLink></li>
                    <li><NavLink to="/links">Links</NavLink></li>
                    {/*<li><NavLink to="/detail/:myId">Details</NavLink></li>*/}
                    <li><a href="/" onClick={logOutFunc} className='waves-effect waves-light btn deep-orange accent-2'>Log out</a></li>
                </ul>
            </div>
        </nav>
        </div>
    )
}
export default NavBar