import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const authContext = createContext()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    

    return (
        <authContext.Provider value={user}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;