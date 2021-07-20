import React, { useReducer, Component } from 'react';

import AllChat from './AllChat/AllChat';
import MyChatIndex from './MyChat/MyChatIndex';
import Member from './Member/Member';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Container } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function FriendIndex() {
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
        </Container>
    );
}