import React from 'react';
import { Container, Content, Header, Text, List, ListItem, Left, Body, Right } from 'native-base';
import { Image, StyleSheet } from 'react-native';

export default function Chat({ navigation }) {
    return (
        <Container>
            <Content>
                <List>
                    <ListItem
                        avatar
                        onPress={() => {
                            navigation.navigate("ChatDetail")
                        }}>
                        <Left>
                            <Image
                                source={require('../img/dog1.png')}
                                style={styles.imageSize} />
                        </Left>
                        <Body>
                            <Text>채팅 테스트</Text>
                            <Text note>aaaaaa</Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>
                </List>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25
    },
    imageSize: {
        width: 50,
        height: 50
    }
});