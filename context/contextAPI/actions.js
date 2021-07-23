import {
    IS_LOGIN,
    IS_SIGNUP,
    CREATE_ROOM,
    JOIN_ROOM,
    LEAVE_ROOM,
    INVITE_ROOM
} from "./types";

const doLogin = (props, trueFalse) => {
    props.dispatch({
        type: IS_LOGIN,
        isLogin: trueFalse
    })
};

const doSignup = (props, trueFalse) => {
    props.dispatch({
        type: IS_SIGNUP,
        isSignup: trueFalse
    })
};

const doCreateRoom = (props, trueFalse) => {
    props.dispatch({
        type: CREATE_ROOM,
        createRoom: trueFalse
    })
};

const doJoinRoom = (props, trueFalse) => {
    props.dispatch({
        type: JOIN_ROOM,
        joinRoom: trueFalse
    })
};

const doLeaveRoom = (props, trueFalse) => {
    props.dispatch({
        type: LEAVE_ROOM,
        leaveRoom: trueFalse
    })
};

const doInviteRoom = (props, trueFalse) => {
    props.dispatch({
        type: INVITE_ROOM,
        inviteRoom: trueFalse
    })
};

const counterActions = (props) => {
    return {
        changeDoLogin: (trueFalse) => {
            doLogin(props, trueFalse);
        },
        changeDoSignup: (trueFalse) => {
            doSignup(props, trueFalse);
        },
        changeDoCreateRoom: (trueFalse) => {
            doCreateRoom(props, trueFalse);
        },
        changeDoJoinRoom: (trueFalse) => {
            doJoinRoom(props, trueFalse);
        },
        changeDoLeaveRoom: (trueFalse) => {
            doLeaveRoom(props, trueFalse);
        },
        changeDoInviteRoom: (trueFalse) => {
            doInviteRoom(props, trueFalse);
        },
    }
}

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
        if (root.auth !== undefined) {
            if (root.auth.request.how == 'login' && root.result.status_code == 200) {
                doLogin(props, true)
            }
            if (root.auth.request.how == 'register' && root.result.status_code == 200) {
                doSignup(props, true)
            }
        }
        if (root.ctrl !== undefined) {
            if (root.ctrl.request.how == 'create' && root.result.status_code == 200) {
                doCreateRoom(props, true)
            }
        }
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

export const useActions = (state, dispatch) => {
    return {
        counterActions: counterActions({ state, dispatch }),
        msgActions: msgActions({ state, dispatch }),
    }
};