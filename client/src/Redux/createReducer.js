import {CreatePage} from '../api/api';


let initialState = {
    link: null,
};
const linkAC = (payload) => ({
    type: 'LINK_GENERATE',
    payload: payload
})
const createReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LINK_GENERATE':
            return Object.assign({}, state, {
                link: action.payload.link
            })
        default:
            return state;
    }
}

export const generateThunk = (from,token) => async (dispatch) => {
    let payload = await CreatePage.generateApi(from,token)
    dispatch(linkAC(payload));

};

export default createReducer;