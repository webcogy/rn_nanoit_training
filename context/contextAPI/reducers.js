import {
    IS_LOGIN,
    IS_SIGNUP,
    CREATE_ROOM,
    JOIN_ROOM,
    LEAVE_ROOM,
    INVITE_ROOM
} from "./types";
import { initialStates } from "./states";

const counterReducer = (state, action) => {
    switch (action.type) {
        case IS_LOGIN:
            return {
                ...state,
                isLogin: action.isLogin
            };
        case IS_SIGNUP:
            return {
                ...state,
                isSignup: action.isSignup
            };
        default:
            return state;
    }
}

const msgReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const listReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const reducer = (state = initialStates, action) => {
    return {
        counterStates: counterReducer(state.counterStates, action),
        msgStates: msgReducer(state.msgStates, action),
        listStates: listReducer(state.listStates, action),
    }
};

export { initialStates, reducer }