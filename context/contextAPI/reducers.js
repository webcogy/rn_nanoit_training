import { DECREASE, INCREASE, IS_COUNTING, IS_LOGIN } from "./types";
import { counterStates, msgStates, initialState } from "./states";

export const counterReducer = (state, action) => {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case IS_COUNTING:
            return {
                ...state,
                isCounter: state.isCount
            };
        case IS_LOGIN:
            return {
                ...state,
                isLogin: action.isLogin
            };
        default:
            return state;
    }
}

export const msgReducer = (state, action) => {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            };
        default:
            return state;
    }
}

export const listReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const reducer = (state = initialState, action) => {
    return {
        counterStates: counterReducer(state.counterStates, action),
        msgStates: msgReducer(state.msgStates, action),
    }
};