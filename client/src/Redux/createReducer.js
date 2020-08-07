import {CreatePage} from '../api/api';

let initialState = {
    link: null,
    auth:null
};
const linkAC = (payload) => ({
    type: 'LINK_GENERATE',
    payload: payload
})
const massageAC = (payload) => ({
    type: 'MASSAGE_AUTH',
    payload: payload
})
const createReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LINK_GENERATE':
            return Object.assign({}, state, {
                link: action.payload.link
            })
        case 'MASSAGE_AUTH':
            return {
                ...state,
                auth: action.payload.message
            }
        default:
            return state;
    }
}

export const generateThunk = (from, token) => async (dispatch) => {
    let payload = await CreatePage.generateApi(from, token)
    if(payload && payload.message){
        dispatch(massageAC(payload));
    }
    dispatch(linkAC(payload));
};
export const getLinksIdThunk = (linkId, token) => async (dispatch) => {
    let payload = await CreatePage.getLinksIdApi(linkId, token)

};

export default createReducer;