import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { StoreContext } from "../context/storeContext";

const Navigation = () => {

    const {state, actions} = useContext(StoreContext);


    return (
        <NavigationContainer>
           { <MainStack /> }
        {/* {
            state.counterStates.isLogin === true ? <MainStack /> : <AuthStack />
        } */}
        </NavigationContainer>
    );
};

export default Navigation;