import React from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import ActionButton from "react-native-action-button";

import { SocketTest } from '../../ws';
import { AuthLogout } from '../LogIn/auth';

export default function renderActionButton() {
    const { sendMessage } = SocketTest();

    const clickLogout = () => {
        sendMessage(
            JSON.stringify(AuthLogout())
        )
        console.log('tap log out')
    }

    return (
        <ActionButton buttonColor="rgba(0,0,0,1)"
            offsetY={100}>
            <ActionButton.Item
                buttonColor="#9b59b6"
                title="방 만들기"
                onPress={() => console.log('tap 방 만들기')}>
                <Icon name="hammer" size={30}></Icon>
            </ActionButton.Item>
            <ActionButton.Item
                buttonColor="#3498db"
                title="회원 검색"
                onPress={() => console.log('tap 회원 검색')}>
                <Icon name="search" size={30}></Icon>
            </ActionButton.Item>
            <ActionButton.Item
                buttonColor="#1abc9c"
                title="로그아웃"
                onPress={clickLogout}>
                <Icon name="barcode" size={30}></Icon>
            </ActionButton.Item>
        </ActionButton>
    );
};