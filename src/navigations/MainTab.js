import React, { useContext, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChannelList, MyChannelList, Profile } from '../screens';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { RenderActionButton } from '../screens/ActionButton';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
// import { YellowBox } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import DialogScreen from '../screens/Dialog';

/* 
YellowBox.ignoreWarnings([
    'Animated: `useNativeDriver` was not specified.',
]);
 */

/*goAlert = () =>{
    Alert.alert(                    // 말그대로 Alert를 띄운다
    "채팅방 이름을 입력해",                    // 첫번째 text: 타이틀 제목
    "ㄹㅇ",                         // 두번째 text: 그 밑에 작은 제목
    [                              // 버튼 배열
        {
            text: "아니요",                              // 버튼 제목
            onPress: () => console.log("아니라는데"),     //onPress 이벤트시 콘솔창에 로그를 찍는다
            style: "cancel"
        },
        { text: "네", onPress: () => console.log("그렇다는데") }, //버튼 제목
        // 이벤트 발생시 로그를 찍는다
    ],
    { cancelable: false }
);
}*/




const Tab = createBottomTabNavigator();


const TabBarIcons = ({ focused, name }) => {
    return (
        <MaterialIcons
            name={name}
            size={26}
            color={'#000000'} />
    )
}

const Container = styled.View`

`;




const MainTab = ({ navigation, route }) => {

    useEffect(() => {

        const newTitle = getFocusedRouteNameFromRoute(route)
        navigation.setOptions({ headerTitle: newTitle });
    }, [route])



    return (
        <>

            <Tab.Navigator
                initialRouteName=""
                tabBarOptions={{ labelPosition: 'beside-icon', showLabel: false }}>
                <Tab.Screen name="Channels" component={ChannelList}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            TabBarIcons({
                                focused,
                                name: 'speaker-notes'
                            }),
                    }} />
                <Tab.Screen name="MyChannelList" component={MyChannelList}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            TabBarIcons({
                                focused,
                                name: 'forum'
                            }),
                    }} />
                <Tab.Screen name="Profile" component={Profile}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            TabBarIcons({
                                focused,
                                name: 'person'
                            }),   
                    }} />
            </Tab.Navigator>


        </>
    );
};

export default MainTab;



const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});