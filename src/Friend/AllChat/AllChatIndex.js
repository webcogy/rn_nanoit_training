import React, { useReducer } from 'react';
import AllChat from './AllChat';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AllChatIndex() {
    return (
        <Stack.Navigator initialRouteName="AllChat"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AllChat" component={AllChat}></Stack.Screen>
        </Stack.Navigator>
    );
}