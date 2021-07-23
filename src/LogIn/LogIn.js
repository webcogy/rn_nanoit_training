import React, { useState, useContext, useEffect } from 'react';
import { Button, Card, CardItem, Container, Content, Footer, Form, Header, Input, Item, Left, Right, Text } from 'native-base';
import { StyleSheet } from 'react-native';

import { AuthLoginId, AuthLoginAnonymous, AuthLogout } from './auth';

import { StoreContext } from '../../context/storeContext';

export default function LogIn({ navigation }) {
    const { state, actions } = useContext(StoreContext);

    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")

    const clickLogin = () => {
        if (email == "", pwd == "") {
            actions.msgActions.WebsocketSendData(AuthLoginAnonymous())
        }
        else {
            actions.msgActions.WebsocketSendData(AuthLoginId(email, pwd))
            if (state.counterStates.isLogin === true) {
                navigation.navigate("TabScreenIndex")
            }
            console.log(state.counterStates.isLogin)
        }
    }

    const clickLogout = () => {
        actions.msgActions.WebsocketSendData(AuthLogout())
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