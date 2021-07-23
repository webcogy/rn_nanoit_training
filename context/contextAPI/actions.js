import { DECREASE, INCREASE, IS_COUNTING, IS_LOGIN, TYPE_LOGGING_RAW } from "./types";

let writer;

const UpdateWriter = (sendMessage) => {
    writer = sendMessage
}

const Writer = (props, json) => {
    if (writer !== undefined) {
        writer(JSON.stringify(json))
    } else {
        alert("[SEND-FAIL] WEBSOCKET WRITER IS NOT SET")
    }
}

const WriterChatMessage = (json) => {
    if (writer !== undefined) {
        writer(JSON.stringify(json))
    }
}

const CreateChatRoom = (json) => {
    if (writer !== undefined) {
        writer(JSON.stringify(json))
    }
}

const receiveData = (json, props) => {
    let root

    try {
        root = JSON.parse(json)
        console.log(root)
    } catch (e) {
        console.log(json)
        console.log(e)
        return
    }
}

const msgActions = (props) => {
    return {
        WebsocketUpdateWriter: (sendMessage) => {
            UpdateWriter(sendMessage);
        },
        WebsocketSendData: (json) => {
            Writer(props, json)
        },
        WebsocketReceiveData: (json) => {
            receiveData(json, props);
        },
        WebsocketSendChatMessage: (json) => {
            WriterChatMessage(json);
        },
        WebsocketCreateChatRoom: (json) => {
            CreateChatRoom(json);
        },
    }
}

const increase = (props) => {
    props.dispatch({
        type: INCREASE,
    })
};

const decrease = (props) => {
    props.dispatch({
        type: DECREASE,
    })
};

const counterText = (props, trueFalse) => {
    props.dispatch({
        type: IS_COUNTING,
        isCount: trueFalse
    })
};

const doLogin = (props, trueFalse) => {
    props.dispatch({
        type: IS_LOGIN,
        isLogin: trueFalse
    })
};

const counterActions = (props) => {
    return {
        onIncrease: () => {
            increase(props);
        },
        onDecrease: () => {
            decrease(props);
        },
        changeCounterText: (trueFalse) => {
            counterText(props, trueFalse);
        },
        changeDoLogin: (trueFalse) => {
            doLogin(props, trueFalse);
        },
    }
}

export const useActions = (state, dispatch) => {
    return {
        counterActions: counterActions({ state, dispatch }),
        msgActions: msgActions({ state, dispatch }),
    }
};