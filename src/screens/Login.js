import React, { useState, useContext, useCallback } from 'react';
import { StoreContext } from "../context/storeContext";
import styled from 'styled-components/native';
import { AuthLogin, AuthSignup, AuthLogout } from '../utils/auth';
import { InitializeWebsocket } from "../ws";
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Signup } from './Signup';
import { Button } from 'react-native';
import { StackNavigation } from '../navigations/MainStack';




const Login = ({ navigation }) => {
    // 전역 어디서든 아래의 소스로 state, actions를 가져와 사용하면 끝.
    const { state, actions } = useContext(StoreContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const { sendMessage, lastMessage } = InitializeWebsocket();

    
    const clickLogin = () => {
        if (email == 0 && pwd == 0) {
            sendMessage(
                JSON.stringify(AuthLoginAnonymous())
            )
        } else {
            sendMessage(
                JSON.stringify(AuthLogin(email, pwd))
            )
        }
        if (!lastMessage || !lastMessage.data) {

        } else {
            const userData = JSON.parse(lastMessage.data)
            // console.log(userData.result.status_code)
            if (userData.result.status_code == 200) {
                //navigation.navigate("MainTab")
                actions.counterActions.changeHappyLogin(true);
            }
        }
    }

    console.log("🚀 ~ file: Login.js ~ line 52 ~ Login ~ state.counterStates.isLogin", state.counterStates.isLogin)

    const clickLogout = () => {
        sendMessage(
            JSON.stringify(AuthLogout())
        )
    }


    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flex: 1 }}
            extraScrollHeight={20}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <MsgWrapper>
                        <Title>
                            Login Screen
                        </Title>
                    </MsgWrapper>
                    <FormWrapper>
                        <InputCommon
                            onChangeText={setEmail}
                            value={email}
                            placeholder="EMAIL"
                        />
                        <InputCommon
                            onChangeText={setPwd}
                            value={pwd}
                            placeholder="PASSWORD"
                        />

                        <BtnOuter>
                            <BtnInner
                                title="Login"
                                color="#f194ff"
                                onPress={clickLogin} />
                        </BtnOuter>
                        <BtnOuter>
                            <BtnInner
                                title="Logout"
                                color="#f194ff"
                                onPress={clickLogout} />
                        </BtnOuter>
                        <BtnOuter>
                            <BtnInner
                                title="Sign up"
                                color="#B947DB"
                                onPress={() => navigation.navigate('Signup')} />
                        </BtnOuter>
                    </FormWrapper>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    );
}

export default Login;

/*********************************************************
* styling
*********************************************************/
const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
    width:100%;
    background:#fff;
`;

const MsgWrapper = styled.View`
    flex:0.4;
    justify-content: flex-end;
    align-items: center;
    width:100%;
    padding-bottom:50px;
`;

const Title = styled.Text`
    font-size:40px;    
    font-weight:100;
`;

const FormWrapper = styled.View`
    flex:0.6;
    justify-content: flex-start;
    align-items: center;
    width:100%;
`;

const InputCommon = styled.TextInput`
    width:60%;
    height:40px;
    background:#fff;
    padding-left:10px;
    margin-bottom:20px;
    border-radius: 5px;
    border:1px solid #f194ff;
`;

const BtnOuter = styled.View`
    width:60%;
    height:40px;
    `;

const BtnInner = styled.Button`
    color:#fff;
    height:150px;
`;

