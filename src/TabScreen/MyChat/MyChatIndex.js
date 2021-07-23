import React, { useReducer } from 'react';
import MyChat from './MyChat';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function ChatIndex() {
    return (
        <Stack.Navigator initialRouteName="MyChat"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MyChat" component={MyChat}></Stack.Screen>
        </Stack.Navigator>
    );
}