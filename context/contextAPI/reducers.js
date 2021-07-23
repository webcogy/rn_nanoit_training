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
        case CREATE_ROOM:
            return {
                ...state,
                createRoom: action.createRoom
            };
        case JOIN_ROOM:
            return {
                ...state,
                joinRoom: action.joinRoom
            };
        case LEAVE_ROOM:
            return {
                ...state,
                leaveRoom: action.leaveRoom
            };
        case INVITE_ROOM:
            return {
                ...state,
                inviteRoom: action.inviteRoom
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