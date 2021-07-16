import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ChannelCreation, ChannelList, Profile } from '../screens';
import MainTab from './MainTab'
import ActionButton from "react-native-action-button";
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text } from "react-native";
import styled from 'styled-components/native';
const Stack = createStackNavigator();


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



/*버튼 스타일 */
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});