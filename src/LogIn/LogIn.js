import React, { useState, useContext } from 'react';
import { Button, Card, CardItem, Container, Content, Footer, Form, Header, Input, Item, Left, Right, Text } from 'native-base';
import { StyleSheet } from 'react-native';

import { SocketTest } from '../../ws';
import { AuthLoginId, AuthLoginAnonymous, AuthLogout } from './auth';

import { StoreContext } from '../../context/storeContext';

export default function LogIn({ navigation }) {
    const { state, actions } = useContext(StoreContext);

    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")

    const { sendMessage, lastMessage } = SocketTest();

    const clickLogin = () => {
        sendMessage(
            JSON.stringify(AuthLoginId(email, pwd))
        )
        if (!lastMessage || !lastMessage.data) {
            return
        } else {
            const userData = JSON.parse(lastMessage.data)
            console.log(`${userData.result.status_code}, ${userData.result.cause}`)
            if (userData.result.status_code == 200) {
                // navigation.reset({ routes: [{ name: "FriendIndex" }] })
                // navigation.navigate("FriendIndex")
                
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