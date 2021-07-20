import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ChannelCreation, ChannelList, Profile } from '../screens';
import MainTab from './MainTab'
import ActionButton from "react-native-action-button";
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text } from "react-native";
import styled from 'styled-components/native';
const Stack = createStackNavigator();
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'Feed':
      return 'News feed';
    case 'Profile':
      return 'My profile';
    case 'Account':
      return 'My account';
  }
}



const StackNavigation = () => {
  return (

    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Main" component={MainTab}
         options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
          })}
      /> 
      <Stack.Screen name="ChannelCreation" component={ChannelCreation} />
      <Stack.Screen name="ChannelList" component={ChannelList} />
    </Stack.Navigator>

  )
};

export default StackNavigation;
