import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {loginThunk, registerThunk} from "./Redux/authReducer";
import UseAllReducer from "./components/UseAllReducer";
import 'materialize-css';
import NavBar from "./components/Navbar";

const App = (props) => {


    let authentication = false

    const data = JSON.parse(localStorage.getItem('storeData'))

    const logOut = () => {
        localStorage.removeItem('storeData')
    }

    if (data) {
        authentication = true
    } else if (props.token) {
        localStorage.setItem('storeData', JSON.stringify({
            userToken: props.token,
            id: props.userId
        }))
        authentication = true
    }

    return (
        <div className="container">
            {authentication && <NavBar logOutFunc={logOut}/>}
            <UseAllReducer isAuthentication={authentication} // !! token mean that true or false
                           registerThunk={props.registerThunk}
                           loginThunk={props.loginThunk}
                           errors={props.errors}
                           message={props.message}
                           loading={props.loading}/>
        </div>
    );
}

let mapStateToProps = (state) => {

    return {
        token: state.authReducer.token,
        userId: state.authReducer.userId,
        errors: state.authReducer.errors,
        message: state.authReducer.message,
        loading: state.authReducer.loading
    }
};

export default compose(withRouter, connect(mapStateToProps, {registerThunk, loginThunk}))(App);
