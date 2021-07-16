import React, { useState } from 'react';
import { Button, Container, Content, Footer, Form, Header, Input, Item, Text } from 'native-base';
import { StyleSheet, Alert } from 'react-native';

import { SocketTest } from '../../ws';
import { AuthSignup } from './auth';

export default function Signup({ navigation }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")

    const { sendMessage, lastMessage } = SocketTest();

    const clickSignup = () => {
        sendMessage(
            JSON.stringify(AuthSignup(name, email, pwd))
        )
        if (!lastMessage || !lastMessage.data) {
            console.log("not sign up")
        } else {
            const userData = JSON.parse(lastMessage.data)
            console.log(userData.result.status_code)
            if (userData.result.status_code == 200) {
                successSignup
                // navigation.pop()
            }
        }
    }

    const successSignup = () =>
        Alert.alert(
            "회원가입",
            "회원가입이 완료되었습니다.",
            [
                {
                    text: "OK",
                    onPress: () => console.log("OK Pressed")
                }
            ]
        );


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