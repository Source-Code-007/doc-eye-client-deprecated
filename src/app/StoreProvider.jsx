'use client'
import { store } from '@/Redux/store';
import React from 'react';
import { Provider } from 'react-redux';

const StoreProvider = ({children}) => {
    const storeRef = useRef()
    if (!storeRef.current) {
      // Create the store instance the first time this renders
      storeRef.current = store()
    }


    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    );
};

export default StoreProvider;