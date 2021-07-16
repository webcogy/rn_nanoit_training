import React from 'react';
import LogIn from './LogIn';
import Signup from './Signup';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function LogInIndex() {
    return (
        <Stack.Navigator initialRouteName="LogIn"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LogIn" component={LogIn}></Stack.Screen>
            <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
        </Stack.Navigator>
    )
}