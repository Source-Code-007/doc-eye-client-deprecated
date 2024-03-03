'use client'
import { getAuth, createUserWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from 'react';
import { app } from '../../firebase.config';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
export const myAuth = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [authLoading, setAuthLoading] = useState(true)

    // create user func
    const createUserWithEmailPass = (email, password) => {
        setAuthLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // create user func with google
    const createUserWithGoogle = () => {
        setAuthLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // create user func with facebook
    const createUserWithFacebook = () => {
        setAuthLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }
    // create user func with google
    const createUserWithGithub = () => {
        setAuthLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    // create user func
    const updateProfileFunc = (displayName, photoURL) => {
        setAuthLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        })
    }

    // signin user func
    const signinUserFunc = (email, password) => {
        setAuthLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signout user func
    const signOutFunc = () => {
        setAuthLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        // const authMonitoring = onAuthStateChanged(auth, (currUser) => {

        //     if (currUser) {
        //         // const uid = user.uid;
        //         setAuthLoading(false)
        //         setUser(currUser)
        //     } else {
        //         setAuthLoading(false)
        //         setUser(null)
        //     }
        // });
        // return () => {
        //     authMonitoring()
        // }
    }, [])


    const myObj = { user, setUser, authLoading, setAuthLoading, createUserWithEmailPass, createUserWithGoogle, createUserWithFacebook, createUserWithGithub, updateProfileFunc, signinUserFunc, signOutFunc }

    return (
        <myAuth.Provider value={myObj}>
            {children}
        </myAuth.Provider>
    );
};

export const useAuth = () => {
    const authData = useContext(myAuth)
    return authData
}

export default AuthProvider;