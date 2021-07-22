import { DECREASE, INCREASE, IS_COUNTING, IS_LOGIN } from "./types";
import { initialStates } from "./states";

const counterReducer = (state, action) => {
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

const msgReducer = (state, action) => {
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