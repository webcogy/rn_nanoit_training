import React, { useReducer, Component } from 'react';

import AllChatIndex from './AllChat/AllChatIndex';
import MyChatIndex from './MyChat/ChatIndex';
import MemberIndex from './Member/MemberIndex';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Container, Header, Right, Button, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import RenderActionButton from './FloatingButton';

const Tab = createBottomTabNavigator();

export default function FriendIndex() {
    return (
        <Container>
            <Header>
                <Text></Text>
                <Right>
                    <TouchableOpacity transparent>
                        <Icon name='menu' size={30}></Icon>
                    </TouchableOpacity>
                </Right>
            </Header>
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
                <Tab.Screen name="전체 채팅" component={AllChatIndex}
                    options={{ unmountOnBlur: Platform.OS === 'ios' ? false : true }}
                ></Tab.Screen>
                <Tab.Screen name="나의 채팅" component={MyChatIndex}
                    options={{ unmountOnBlur: Platform.OS === 'ios' ? false : true }}
                ></Tab.Screen>
                <Tab.Screen name="전체 회원" component={MemberIndex}
                    options={{ unmountOnBlur: Platform.OS === 'ios' ? false : true }}
                ></Tab.Screen>
            </Tab.Navigator>
            <RenderActionButton></RenderActionButton>
        </Container>
    );
}