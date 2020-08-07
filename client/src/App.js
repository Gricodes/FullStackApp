import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {generateThunk, getLinksIdThunk} from "./Redux/createReducer";
import {loginThunk, registerThunk} from "./Redux/authReducer";
import NavBar from "./components/Navbar";
import UseAllReducer from "./components/UseAllReducer";
import 'materialize-css';

const App = (props) => {

    let authentication = false
    const [authState, setAuthState] = useState(null)

    const logOut = () => {
        localStorage.removeItem('storeData')
    }
    const data = JSON.parse(localStorage.getItem('storeData'))
    if (data) { authentication = true }
    else if (props.token) {
        localStorage.setItem('storeData', JSON.stringify({
            userToken: props.token,
            id: props.userId
        }))
        authentication = true
    }

    if (authState){
        logOut()
        setAuthState(null)
    }
    useEffect(() => {
        if (props.auth){
            setAuthState(true)
        }
    }, [props.auth])

    return (
        <>
            {authentication && <NavBar logOutFunc={logOut}/>}
            <div className="container">
                <UseAllReducer isAuthentication={authentication} // !! token mean that true or false
                               auth = {props.auth}
                               registerThunk={props.registerThunk}
                               loginThunk={props.loginThunk}
                               errors={props.errors}
                               message={props.message}
                               loading={props.loading}
                               link={props.link}
                               generateThunk={props.generateThunk}
                               getLinksIdThunk = {props.getLinksIdThunk}
                               data = {data}
                />
            </div>
        </>
    );
}

let mapStateToProps = (state) => {

    return {
        token: state.authReducer.token,
        userId: state.authReducer.userId,
        errors: state.authReducer.errors,
        message: state.authReducer.message,
        loading: state.authReducer.loading,
        link: state.createReducer.link,
        auth: state.createReducer.auth
    }
};

export default compose(withRouter, connect(mapStateToProps, {registerThunk, loginThunk, generateThunk,getLinksIdThunk}))(App);
