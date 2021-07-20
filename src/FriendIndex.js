import React, { useReducer, Component, useCallback } from 'react';

import AllChat from './AllChat/AllChat';
import MyChatIndex from './MyChat/MyChatIndex';
import Member from './Member/Member';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Container, Text, View  } from 'native-base';
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { SocketTest } from '../ws';
import { AuthLogout } from './LogIn/auth';
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();


export default function FriendIndex() {
    const { sendMessage, lastMessage } = SocketTest();


    const clickLogout = useCallback(() => {
        sendMessage(
            JSON.stringify(AuthLogout())
        )
        if (!lastMessage || !lastMessage.data) {
            console.log("...")
        } else {
            const userData = JSON.parse(lastMessage.data)
            console.log(`${userData.result.status_code}, ${userData.result.cause}`)
        }
    }, []);

    return (
        <Container>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "전체 채팅") {
                            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                        }
                        else if (route.name === "나의 채팅") {
                            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
                        }
                        else if (route.name === "전체 회원") {
                            iconName = focused ? 'people' : 'people-outline';
                        }

                        return <Icon name={iconName} size={size} color={color}></Icon>;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'gray'
                }}>
                <Tab.Screen name="전체 채팅" component={AllChat}></Tab.Screen>
                <Tab.Screen name="나의 채팅" component={MyChatIndex}></Tab.Screen>
                <Tab.Screen name="전체 회원" component={Member}></Tab.Screen>
            </Tab.Navigator>
            <TouchableOpacity style={styles.btn_create} onPress={clickLogout}>
                <Text style={styles.btn_create_text}>+</Text>
            </TouchableOpacity>
        </Container>
    );
}


const styles = StyleSheet.create({
    btn_create: {
        width:70,
        height:70,
        borderRadius:50,
        backgroundColor:"blue",
        position:'absolute',
        right:20,
        bottom:120,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:5
    },
    btn_create_text:{
        fontSize:50,
        color:'#fff',
    }
});