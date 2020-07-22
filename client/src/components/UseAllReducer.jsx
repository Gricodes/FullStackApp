import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import LinksPage from "../pages/LinksPage";
import CreatePage from "../pages/CreatePage";
import DetailPage from "../pages/DetailPage";

const UseAllReducer = props => {

    if (props.errors && window.M) {
        window.M.toast({html: props.errors})
    } else if (props.message && window.M) {
        window.M.toast({html: props.message})
    }

    if (props.isAuthentication) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <LinksPage/>
                </Route>
                <Route path="/create" exact>
                    <CreatePage/>
                </Route>
                <Route path="/detail/:id" exact>
                    <DetailPage/>
                </Route>
                <Redirect to="/create"/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage  {...props} />
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}
export default UseAllReducer
