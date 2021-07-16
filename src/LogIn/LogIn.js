import React, { useState } from 'react';
import { Button, Card, CardItem, Container, Content, Footer, Form, Header, Input, Item, Left, Right, Text } from 'native-base';
import { StyleSheet } from 'react-native';

import { SocketTest } from '../../ws';
import { AuthLoginId, AuthLoginAnonymous, AuthLogout } from './auth';

export default function LogIn({ navigation }) {
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")

    const { sendMessage, lastMessage } = SocketTest();

    const clickLogin = () => {
        if (email == 0 && pwd == 0) {
            sendMessage(
                JSON.stringify(AuthLoginAnonymous())
            )
        } else {
            sendMessage(
                JSON.stringify(AuthLoginId(email, pwd))
            )
        }
        if (!lastMessage || !lastMessage.data) {
            console.log("...")
        } else {
            const userData = JSON.parse(lastMessage.data)
            console.log(`${userData.result.status_code}, ${userData.result.cause}`)
            if (userData.result.status_code == 200) {
                navigation.navigate("FriendIndex", {
                    userData: userData
                });
            }
        }
    }

    const clickLogout = () => {
        sendMessage(
            JSON.stringify(AuthLogout())
        )
        if (!lastMessage || !lastMessage.data) {
            console.log("...")
        } else {
            const userData = JSON.parse(lastMessage.data)
            console.log(`${userData.result.status_code}, ${userData.result.cause}`)
        }
    }

    return (
        <Container>
            <Header style={styles.container}>
                <Text style={styles.headTextStyle}>로그인</Text>
            </Header>
            <Content>
                <Form>
                    <Item>
                        <Input placeholder="E-mail 입력" onChangeText={text => setEmail(text)} value={email}></Input>
                    </Item>
                    <Item>
                        <Input placeholder="비밀번호 입력" onChangeText={text => setPwd(text)} value={pwd}></Input>
                    </Item>
                </Form>
            </Content>
            <Card>
                <CardItem>
                    <Button
                        onPress={clickLogout}>
                        <Text>로그아웃</Text>
                    </Button>
                </CardItem>
                <CardItem>
                    <Left>
                        <Text note style={styles.textStyle}>회원이 아니신가요?</Text>
                    </Left>
                    <Right>
                        <Button style={styles.tinyButton, styles.container}
                            onPress={() => {
                                navigation.navigate("Signup")
                            }}>
                            <Text>회원가입</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
            <Footer>
                <Content>
                    <Button full
                        onPress={clickLogin}>
                        <Text>로그인</Text>
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