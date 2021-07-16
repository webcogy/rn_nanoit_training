import React from 'react';
import styled from 'styled-components/native';
import { Text, Button, TextInput } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Dialog from 'react-native-dialog';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Container = styled.View`
  align-items: center;
  background-color: #ffffff;

`;

const ChannelCreation = ({ navigation }) => {
    return (
        <KeyboardAwareScrollView
        contentContainerStyle={{ flex: 1 }}
        extraScrollHeight={20}>
            <Container>
                <Text>hhhhhiii</Text>
            </Container>

        </KeyboardAwareScrollView>
    );

};




export default ChannelCreation;
