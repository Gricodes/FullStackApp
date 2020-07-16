import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./authReducer"

import thunk from "redux-thunk";

let reducers = combineReducers({
    authReducer:authReducer,
});

let store = createStore(reducers,applyMiddleware(thunk));

window.store = store;

export default store;


