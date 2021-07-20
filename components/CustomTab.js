import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from "react-native";


function CustomTab({navigation}){

    const clickAaaa = () => {
        navigation.reset({routes:[{name:'Aaaa'}]})
    }

    const clickBbbb = () => {
        navigation.reset({routes:[{name:'Bbbb'}]})
    }

    const clickCccc = () => {
        navigation.reset({routes:[{name:'Cccc'}]})
    }
    
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={clickAaaa} style={styles.buttonTab} ><Text>aaa</Text></TouchableOpacity>
            <TouchableOpacity onPress={clickBbbb} style={styles.buttonTab} ><Text>bbb</Text></TouchableOpacity>
            <TouchableOpacity onPress={clickCccc} style={styles.buttonTab} ><Text>ccc</Text></TouchableOpacity>
        </View>
    )
}

export default  CustomTab;


const styles = StyleSheet.create({
    container: {
      flex:0.1,
      borderTopColor:'#ddd',
      borderTopWidth:1,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row'
    },
    buttonTab:{
        width:'33%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    }
});