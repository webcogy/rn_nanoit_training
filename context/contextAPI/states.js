const counterStates = {
    isLogin: false,
    isSignup: false,
    createRoom: false,
    joinRoom: false,
    leaveRoom: false,
    inviteRoom: false,
}

const msgStates = {
    FRIENDS_ALL: [],
    TOPICS_ALL: [],
    TOPICS_MY: [],
}

const listStates = {
    listName: {
        id: 0,
        text: '',
    },
    list: [],
}

export const initialStates = {
    counterStates,
    msgStates,
    listStates,
}