import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export const RenderActionButton = () => {
    return (
        <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item
                buttonColor="#9b59b6"
                title="직접 입력"
                onPress={() => console.log('notes tapped!')}>
                <Icon name="form" type="antdesign" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
                buttonColor="#3498db"
                title="제목 검색"
                onPress={() => { }}>
                <Icon name="search" type="material" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
                buttonColor="#1abc9c"
                title="바코드 검색"
                onPress={() => {
                    navigation.navigate('BarcodeScanner');
                }}>
                <Icon
                    name="barcode-scan"
                    type="material-community"
                    style={styles.actionButtonIcon}
                />
            </ActionButton.Item>
        </ActionButton>
    );
};



const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
        width:50,
        height:50,
    },
});