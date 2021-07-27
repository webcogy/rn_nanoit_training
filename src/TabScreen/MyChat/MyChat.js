import React, { useContext, useState } from 'react';
import { Button, Card, CardItem, Container, Content, Input, Item, Left, List, Right, Text } from 'native-base';
import { FlatList, StyleSheet, View } from 'react-native';

// import { MyChatList } from './MyChatList';

import { CtrlCreateRoom } from '../../../utils/ctrl';

import { StoreContext } from '../../../context/storeContext';

export default function MyChat({ navigation }) {
    const { state, actions } = useContext(StoreContext);

    const [roomName, setRoomName] = useState("")

    const clickCreateRoom = () => {
        if (roomName == "") {
        } else {
            actions.msgActions.WebsocketCreateChatRoom(CtrlCreateRoom(roomName))
            console.log(state.chatListStates.createRoom)
            console.log(state.chatListStates.chatName)
            console.log(state.chatListStates.list)
        }
    }

    const RenderList = () => {
        return (
            <View>
                {
                    state.chatListStates.list.map((e, i) =>
                        <View key={i}>
                            <List>
                                <Right>
                                    <Text>{e.name}</Text>
                                </Right>
                            </List>
                        </View>
                    )
                }
            </View>
        )
    }

    return (
        <Container>
            <Content>
                <Item style={styles.container}>
                    <Text>나의 채팅</Text>
                </Item>
                <View>
                    <RenderList />
                </View>
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