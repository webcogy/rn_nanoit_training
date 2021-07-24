const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// 모든 채팅방 요청
export const MetaAllRoom = () => {
    return {
        meta: {
            uuid: uuidv4(),
            request: {
                what: "topic",
                how: "select"
            }
        }
    }
}

// 내 채팅방 요청
export const MetaMyRoom = () => {
    return {
        meta: {
            uuid: uuidv4(),
            request: {
                what: "topic",
                how: "select",
                using: "me"
            }
        }
    }
}

// 모든 사용자 요청
export const MetaAllUser = () => {
    return {
        meta: {
            uuid: uuidv4(),
            request: {
                what: "user",
                how: "select"
            }
        }
    }
}

// 특정 채팅방 안 사용자 요청
export const MetaSelectRoomUser = (id) => {
    return {
        meta: {
            uuid: uuidv4(),
            request: {
                what: "user",
                how: "select",
                using: "topic",
                topic: {
                    id: id
                }
            }
        }
    }
}

// 특정 채팅방 안 메시지 요청
export const MetaSelectMessage = (id) => {
    return {
        meta: {
            uuid: uuidv4(),
            request: {
                what: "message",
                how: "select",
                topic: {
                    id: id
                }
            }
        }
    }
}

// 사용자 프로필 수정
export const MetaUserProfile = (description) => {
    return {
        meta: {
            uuid: uuidv4(),
            request: {
                what: "profile",
                how: "upload",
                profile: {
                    description: description
                }
            }
        }
    }
}