import React, { useState } from 'react';
import { Button, Card, CardItem, Container, Content, Footer, Form, Header, Input, Item, Left, Right, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import CustomTab from '../components/CustomTab';

export default function ContentWrapper({ children }) {
    return (
        <Container style={styles.container}>
            {children}
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:0.9,
        justifyContent: 'center',
        alignItems: 'center'
    },
});