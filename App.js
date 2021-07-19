import React, { useReducer } from 'react';
import LogInIndex from './src/LogIn/LogInIndex';
import FriendIndex from './src/Friend/FriendIndex';
import Aaaa from './imsi/Aaaa';
import Bbbb from './imsi/Bbbb';
import Cccc from './imsi/Cccc';

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
                        {/* <Stack.Screen name="FriendIndex" component={FriendIndex}></Stack.Screen> */}
                        <Stack.Screen name="Aaaa" component={Aaaa}></Stack.Screen>
                        <Stack.Screen name="Bbbb" component={Bbbb}></Stack.Screen>
                        <Stack.Screen name="Cccc" component={Cccc}></Stack.Screen>
                    </Stack.Navigator>
                </NavigationContainer>
            </StoreProvider>
        </WebsocketContext.Provider>
    );
}