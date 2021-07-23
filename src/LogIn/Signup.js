import React, { useContext, useState } from 'react';
import { Button, Container, Content, Footer, Form, Header, Input, Item, Text } from 'native-base';
import { StyleSheet } from 'react-native';

import { AuthSignup } from './auth';
import { StoreContext } from '../../context/storeContext';

export default function Signup({ navigation }) {
    const { state, actions } = useContext(StoreContext);

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")

    const clickSignup = () => {
        actions.msgActions.WebsocketSendData(AuthSignup(name, email, pwd))
        if (state.counterStates.isSignup === true) {
            navigation.pop()
        }
        console.log(state.counterStates.isSignup)
    }

    return (
        <Container>
            <Header style={styles.container}>
                <Text style={styles.headTextStyle}>회원가입</Text>
            </Header>
            <Content>
                <Form>
                    <Item>
                        <Input placeholder="이름 입력" onChangeText={text => setName(text)} value={name}></Input>
                    </Item>
                    <Item>
                        <Input placeholder="E-mail 입력" onChangeText={text => setEmail(text)} value={email}></Input>
                    </Item>
                    <Item>
                        <Input placeholder="비밀번호 입력" onChangeText={text => setPwd(text)} value={pwd}></Input>
                    </Item>
                </Form>
            </Content>
            <Footer>
                <Content>
                    <Button full
                        onPress={clickSignup}>
                        <Text>회원가입</Text>
                    </Button>
                </Content>
            </Footer>
        </Container>
    );
}

const styles = StyleSheet.create({
    tinyButton: {
        width: 80,
        height: 30
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 20
    },
    headTextStyle: {
        fontSize: 25
    }
});