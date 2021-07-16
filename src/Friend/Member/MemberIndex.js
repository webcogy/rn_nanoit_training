import React, { useReducer } from 'react';
import Member from './Member';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MemberIndex() {
    return (
        <Stack.Navigator initialRouteName="Member"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Member" component={Member}></Stack.Screen>
        </Stack.Navigator>
    );
}