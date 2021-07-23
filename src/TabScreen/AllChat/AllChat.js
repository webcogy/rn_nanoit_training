import React from 'react';
import { Container, Text } from 'native-base';
import { StyleSheet } from 'react-native';

export default function AllChat() {
    return (
        <Container style={styles.container}>
            <Text>전체 채팅</Text>
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