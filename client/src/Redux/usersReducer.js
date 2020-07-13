import {usersAPI} from "../../api/api";

let initialState = {
    usersData: [],
    pageSize: 20,
    totalUsersCount: null,
    currentPage: 1,
    isLoading: false,
    isFollowing: [],
};

const followAC = (isFollowed, userId) => ({
    type: "FOLLOWED",
    userId: userId, isFollowed: isFollowed
});
const setUsersAC = (apiResponseResult, apiTotalUsersCount) => ({
    type: "SET_USERS",
    users: apiResponseResult, total: apiTotalUsersCount
});
export const clickPageAC = (page) => ({
    type: "SELECTED_PAGE",
    page: page,
});
const isLoadingAC = (val) => ({
    type: "IS_LOADING",
    isLoading: val,
});
const isFollowingAC = (following, userId) => ({
    type: "IS_FOLLOWING",
    following: following,
    userId: userId
});


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FOLLOWED":
            return {
                ...state,
                usersData: [...state.usersData].map((i) => {
                    if (i.id === action.userId) {
                        return {...i, followed: action.isFollowed}
                    } else {
                        return i
                    }
                })
            };
        case "SET_USERS":
            return {
                ...state,
                usersData: action.users,
                totalUsersCount: action.total,
            };
        case "SELECTED_PAGE":
            return {
                ...state,
                currentPage: action.page,
            };
        case "IS_LOADING":
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case "IS_FOLLOWING":
            return {
                ...state,
                isFollowing: action.following
                    ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(i => i !== action.userId)
            };
        default:
            return state;
    }
};

export const getUsersThunk = (currentPage = 1, pageSize = 20, friendsPage = null) => async (dispatch) => {
    dispatch(isLoadingAC(true));
    let data = await usersAPI.getUsersApi(currentPage, pageSize,friendsPage)
    dispatch(isLoadingAC(false));
    dispatch(clickPageAC(currentPage));
    dispatch(setUsersAC(data.items, data.totalCount));
};

export const followThunk = (userId) => async (dispatch) => {
    dispatch(isFollowingAC(true, userId));
    let data = await usersAPI.unFollowApi(userId)
    data.resultCode === 0 &&
    dispatch(followAC(false, userId));
    dispatch(isFollowingAC(false, userId));
};
export const unFollowThunk = (userId) => async (dispatch) => {
    dispatch(isFollowingAC(true, userId));
    let data = await usersAPI.followApi(userId)
    data.resultCode === 0 &&
    dispatch(followAC(true, userId));
    dispatch(isFollowingAC(false, userId));
};

export default usersReducer;