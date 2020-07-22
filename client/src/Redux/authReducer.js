import {AuthPage} from "../api/api";

let initialState = {
    token: null,
    userId: null,
    message: null,
    errors: null,
    loading: false
};

const registerAC = (payload) => ({
    type: 'REGISTER_AUTH',
    payload: {...payload},
});
const loginAC = (payload) => ({
    type: 'LOGIN_AUTH',
    payload: {...payload},
});
const loadingAC = (bool) => ({
    type: 'LOADING',
    payload: bool,
});

const auth = (state = initialState, action) => {

    switch (action.type) {
        case "REGISTER_AUTH":
            if (action.payload.errors) {
                let newError = action.payload.errors.find(i => i)
                return {
                    ...state,
                    errors: newError.msg,
                    message: null
                };
            }
            return {
                ...state,
                message: action.payload.message,
                errors: null
            }
        case "LOGIN_AUTH":
            if (action.payload.errors) {
                let newError = action.payload.errors.find(i => i).msg
                return {
                    ...state,
                    errors: newError.msg,
                    message: null
                }
            }
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
                errors: null,
                message: action.payload.message
            }
        case "LOADING":
            return {
                ...state,
                loading: action.payload,
                message: null,
                errors: null,
            }
        default:
            return state;
    }
};

export const registerThunk = (form) => async (dispatch) => {
    dispatch(loadingAC(true))
    let payload = await AuthPage.registerApi(form)
    dispatch(registerAC(payload));
    dispatch(loadingAC(false))
};

export const loginThunk = (form) => async (dispatch) => {
    dispatch(loadingAC(true))
    let payload = await AuthPage.loginApi(form);
    dispatch(loginAC(payload));
    dispatch(loadingAC(false))
};

export default auth;