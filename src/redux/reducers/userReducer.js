import { USERS_START, USERS_SUCCESS, STOP_LOADING } from "../actionTypes";

const initialState = {
    userList: [],
    loading: false,
};

export default function userReducer(state=initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case USERS_START :
        case STOP_LOADING:
            return {
                ...state,
                ...payload
            }
        case USERS_SUCCESS:
            return {
                ...state,
                userList: payload
            };
        default: 
            return { ...state };
    }
}