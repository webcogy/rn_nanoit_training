import React, { useState } from 'react';
import { Button, Card, CardItem, Container, Content, Footer, Form, Header, Input, Item, Left, Right, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import CustomTab from '../../components/CustomTab';
import ContentWrapper from '../../components/ContentWrapper';

export default function MyChat({ navigation }) {
    return (
        <>
            <ContentWrapper>
                <Container style={styles.container}>
                    <Text>나의 채팅</Text>
                </Container>
            </ContentWrapper>
            <CustomTab navigation={navigation} />
        </>
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