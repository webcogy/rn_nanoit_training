const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// 회원가입
export const AuthSignup = (name, email, password) => {
    return {
        auth: {
            uuid: uuidv4(),
            request: {
                what: "user",
                how: "register",
                user: {
                    name: name,
                    email: email,
                    password: password
                }
            }
        }
    }
}

// id 로그인
export const AuthLoginId = (email, password) => {
    return {
        auth: {
            uuid: uuidv4(),
            request: {
                what: "session",
                how: "login",
                using: "id",
                user: {
                    email: email,
                    password: password
                }
            }
        }
    }
}

// 익명으로 로그인
export const AuthLoginAnonymous = () => {
    return {
        auth: {
            uuid: uuidv4(),
            request: {
                what: "session",
                how: "login",
                using: "anonymous"
            }
        }
    }
}

// 로그아웃
export const AuthLogout = () => {
    return {
        auth: {
            uuid: uuidv4(),
            request: {
                what: "session",
                how: "logout"
            }
        }
    }
}