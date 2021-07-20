import React, { useReducer } from 'react';
import MyChat from './MyChat';
import MyChatDetail from './MyChatDetail';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function ChatIndex() {
    return (
        <Stack.Navigator initialRouteName="MyChat"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MyChat" component={MyChat}></Stack.Screen>
            <Stack.Screen name="MyChatDetail" component={MyChatDetail}></Stack.Screen>
        </Stack.Navigator>
    );
}