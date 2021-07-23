import React, { useContext, useState } from 'react';
import { Button, Card, CardItem, Container, Content, Input, Left, Right, Text } from 'native-base';
import { StyleSheet } from 'react-native';

import { CtrlCreateRoom } from '../ctrl';

import { StoreContext } from '../../../context/storeContext';

export default function MyChat({ navigation }) {
    const { state, actions } = useContext(StoreContext);

    const [roomName, setRoomName] = useState("")

    const clickCreateRoom = () => {
        if (roomName == "") {
        } else {
            actions.msgActions.WebsocketCreateChatRoom(CtrlCreateRoom(roomName))
            console.log(state.counterStates.createRoom)
        }
    }

    return (
        <Container style={styles.container}>
            <Content>
                <Text>나의 채팅</Text>
            </Content>
            <Card>
                <CardItem>
                    <Left>
                        <Input placeholder="방 이름 입력" onChangeText={text => setRoomName(text)} value={roomName}></Input>
                    </Left>
                    <Right>
                        <Button onPress={clickCreateRoom}>
                            <Text>방 만들기</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
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