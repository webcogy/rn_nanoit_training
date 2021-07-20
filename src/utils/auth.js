const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const AuthSignup = (name, email, password) => {
    return {
        auth: {
            uuid: uuidv4(),
            request: {
                what: "user",
                how: "register",
                using: "id",
                user: {
                    name:name,
                    email:email,
                    password: password
                }
            }
        }
    }
}

export const AuthLogin = (email, password) => {
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


export const AuthLogout = () => {
    return {
            auth: {
                uuid: uuidv4(),
                request: {
                    what: "session",
                    how: "logout",
                    keep: false
                }
            }
    }
}

