import React, { useState } from 'react';
import { Container } from 'native-base';
import { StyleSheet } from 'react-native';
import CustomTab from './CustomTab';

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