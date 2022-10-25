import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const authContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    
    const googleSingIn = ()=> {
       return signInWithPopup(auth,provider)
    }
    const logInWithEmail = (email,password) => {
       return signInWithEmailAndPassword(auth,email, password)
    }
    const signUpWithEmailAndPassword = (email,password) => {
       return createUserWithEmailAndPassword(auth,email, password)
    }
    const userInfo = {
        user, 
        googleSingIn,
        logInWithEmail,
        signUpWithEmailAndPassword
    }
    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;