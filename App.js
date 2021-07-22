import React, { useReducer } from 'react';
import { StoreProvider } from './context/storeContext';
import _App from './_App';

export default function App() {
    return (
        <StoreProvider>
            <_App />
        </StoreProvider>
    );
}