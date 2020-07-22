import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./authReducer"

import thunk from "redux-thunk";
import createReducer from "./createReducer";

let reducers = combineReducers({
    authReducer: authReducer,
    createReducer: createReducer
});

let store = createStore(reducers, applyMiddleware(thunk));


export default store;


