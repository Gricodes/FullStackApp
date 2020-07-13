import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';
import AuthPage from "./pages/AuthPage";
import LinksPage from "./pages/LinksPage";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage";


export const UseAllReducer = (props) => {

    if (props.isAuthentication) {
        return (
            <BrowserRouter>
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
            </BrowserRouter>
        )
    }
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <AuthPage/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        </BrowserRouter>
    )
}
