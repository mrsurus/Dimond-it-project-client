import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const authContext = createContext()
const auth = getAuth(app)



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const googleSingIn = (provider)=> {
       return signInWithPopup(auth,provider)
    }
    
    const githubSingIn = (provider)=> {
       return signInWithPopup(auth,provider)
    }

    const logInWithEmail = (email,password) => {
       return signInWithEmailAndPassword(auth,email, password)
    }

    const signUpWithEmailAndPassword = (email,password) => {
       return createUserWithEmailAndPassword(auth,email, password)
    }

    
    useEffect( ()=>{
      const unsubscribe =  onAuthStateChanged(auth, (currentUser) =>{
            console.log('user is side website', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])

    const getProfileInfo = (profile)=>{
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const userInfo = {
        user, 
        logOut,
        loading,
        googleSingIn,
        githubSingIn,
        logInWithEmail,
        signUpWithEmailAndPassword,
        getProfileInfo
    }
    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;