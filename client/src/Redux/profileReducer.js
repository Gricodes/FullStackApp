import {profileAPI} from "../../api/api";

let initialState = {
    postData: [
        {id: 1, massage: 'Hi, my first text', likes: 17},
        {id: 2, massage: 'Hi, how are you', likes: 4},
        {id: 3, massage: 'My name is Props', likes: 90},
    ],
    profile: null,
    status: ''
};

const setUserProfileAC = (profile) => ({
    type: 'SET_USER_PROFILE',
    profile: profile
});
const getStatusProfileAC = (textStatus) => ({
    type: 'GET_STATUS_PROFILE',
    status: textStatus
});
export const onChangeAreaAC = (newProfilePost) => ({
    type: 'ADD_POST',
    newPost: newProfilePost
});
export const updateProfilePhotos = (photos) => ({
    type: 'UPDATE_PHOTO',
    photos: photos
});

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_POST":
            return {
                ...state,
                postData: [...state.postData, {id: 6, massage: action.newPost, likes: 5}],
            };
        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            };
        case "GET_STATUS_PROFILE":
            return {
                ...state,
                status: action.status
            };
        case "UPDATE_PHOTO":
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        default:
            return state;
    }
};

export const profileThunk = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfileApi(userId)
        dispatch(setUserProfileAC(data))
    }
};

export const statusThunk = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatusApi(userId)
        dispatch(getStatusProfileAC(data))
    }
};
export const updateStatusThunk = (status) => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatusApi(status)
        if (data.resultCode === 0) {
            dispatch(getStatusProfileAC(status))
        }
    }
};
export const sendNewPhotoThunk = (file) => {
    return async (dispatch) => {
        let data = await profileAPI.sendPhotoApi(file)
        if (data.resultCode === 0) {
            dispatch(updateProfilePhotos(data.data.photos))
        }
    }
};
export const sendProfileFormThunk = (profileForm) => {
    return async (dispatch) => {
        let data = await profileAPI.sendProfileFormApi(profileForm)
        if (data.resultCode === 0) {
            // dispatch(getStatusProfileAC(data))
        }
    }
};

export default profileReducer;