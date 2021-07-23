const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// 채팅방 생성
export const CtrlCreateRoom = (name) => {
    return {
        ctrl: {
            uuid: uuidv4(),
            request: {
                what: "topic",
                how: "create",
                who: "alone",
                private: false,
                topic: {
                    name: name
                }
            }
        }
    }
}

// 채팅방 입장
export const CtrlJoinRoom = () => {
    return {
        ctrl: {
            uuid: uuidv4(),
            request: {
                what: "topic",
                how: "join",
                topic: {
                    id: 0
                }
            }
        }
    }
}

// 채팅방 나가기
export const CtrlLeaveRoom = () => {
    return {
        ctrl: {
            uuid: uuidv4(),
            request: {
                what: "topic",
                how: "leave",
                topic: {
                    id: 0
                }
            }
        }
    }
}

// 채팅방 초대하기
export const CtrlInviteRoom = () => {
    return {
        ctrl: {
            uuid: uuidv4(),
            request: {
                what: "topic",
                how: "invite",
                user: {
                    id: 0
                },
                topic: {
                    id: 0
                }
            }
        }
    }
}