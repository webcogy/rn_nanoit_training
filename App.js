import React, { useReducer } from 'react';
import LogInIndex from './src/LogIn/LogInIndex';
import AllChat from './src/AllChat/AllChat';
import MyChat from './src/MyChat/MyChatIndex';
import Member from './src/Member/Member';

import { SocketTest } from './ws';
import { StoreProvider } from './context/storeContext';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const WebsocketContext = React.createContext({
    handleWebsocketClose: () => { }
})

export default function App() {
    const { handleWebsocketClose } = SocketTest()
    const value = React.useMemo(() => ({ handleWebsocketClose }), [handleWebsocketClose])

    return (
        <WebsocketContext.Provider value={value}>
            <StoreProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="LogInIndex"
                        screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="LogInIndex" component={LogInIndex}></Stack.Screen>
                        <Stack.Screen name="AllChat" component={AllChat}></Stack.Screen>
                        <Stack.Screen name="MyChat" component={MyChat}></Stack.Screen>
                        <Stack.Screen name="Member" component={Member}></Stack.Screen>
                    </Stack.Navigator>
                </NavigationContainer>
            </StoreProvider>
        </WebsocketContext.Provider>
    );
}