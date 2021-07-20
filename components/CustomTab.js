import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


function CustomTab({ navigation }) {
    const clickAaaa = () => {
        navigation.reset({ routes: [{ name: 'Aaaa' }] })
    }
    const clickBbbb = () => {
        navigation.reset({ routes: [{ name: 'Bbbb' }] })
    }
    const clickCccc = () => {
        navigation.reset({ routes: [{ name: 'Cccc' }] })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={clickAaaa} style={styles.buttonTab}>
                <Icon name='people-outline' size={23}></Icon>
                <Text style={styles.buttonText}>전체 채팅</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={clickBbbb} style={styles.buttonTab}>
                <Icon name='chatbubbles-outline' size={23}></Icon>
                <Text style={styles.buttonText}>나의 채팅</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={clickCccc} style={styles.buttonTab}>
                <Icon name='person-add-outline' size={23}></Icon>
                <Text style={styles.buttonText}>전체 회원</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomTab;


const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        borderTopColor: '#ddd',
        borderTopWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonText: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonTab: {
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});