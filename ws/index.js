import React, { useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-native-use-websocket';
import { StoreContext } from '../context/storeContext';

export const SocketTest = () => {
    const { state, actions } = React.useContext(StoreContext)

    const { sendMessage, lastMessage, readyState, getWebSocket } = useWebSocket('ws://172.30.1.51:8081/api/v1/ws', {
        shouldReconnect: (closeEvent) => true,
        reconnectAttempts: 10,
        reconnectInterval: 5000,
    });

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    useEffect(() => {
        if (!lastMessage || !lastMessage.data) {
            return
        } else {
            actions.generalActions.WebSocketReceiveData(lastMessage.data)
        }
    }, [])

    useEffect(() => {
        if (connectionStatus === 'Open') {
            console.log('opened');
            //actions.msgActions.WebsocketUpdateWriter(sendMessage)
            // actions.counterActions.changeCounterText(true)
            console.log(state.counterStates.isCounter)
            // actions.msgActions.WebsocketCreateChatRoom('방 정보')
        } else if (connectionStatus === 'Connecting') {
            console.log('connecting...');
        } else if (connectionStatus === 'Closing') {
            console.log('closing...');
        } else if (connectionStatus === 'Closed') {
            console.log('closed');
        } else {
            console.log('uninstantiated');
        }
    }, [connectionStatus])

    const handleWebsocketClose = useCallback(() => {
        getWebSocket().close()
    }, []);

    return { sendMessage, lastMessage, readyState, getWebSocket, handleWebsocketClose }
}