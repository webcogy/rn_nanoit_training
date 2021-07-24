import React, { useState } from 'react';
import { Container, Text, Item, Content } from 'native-base';
import { StyleSheet } from 'react-native';

export default function Member({ navigation }) {
    return (
        <Container>
            <Content>
                <Item style={styles.container}>
                    <Text>전체 회원</Text>
                </Item>
            </Content>
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