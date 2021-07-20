import React, { useCallback, useEffect } from 'react';
import { StoreContext } from '../context/storeContext';
import useWebSocket, { ReadyState } from 'react-native-use-websocket';

export const SocketTest = () => {
    const { actions } = React.useContext(StoreContext)

    const { sendMessage, lastMessage, readyState, getWebSocket } = useWebSocket('ws://172.30.1.23:8081/api/v1/ws', {
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
    }, [lastMessage])
    
    useEffect(() => {
        if (connectionStatus === 'Open') {
            console.log('opened');
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