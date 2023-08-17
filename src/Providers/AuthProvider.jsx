'use client'
import { getAuth, createUserWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from 'react';
import { app } from '../../firebase.config';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
export const myAuth = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    // create user func
    const createUserWithEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // create user func with google
    const createUserWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // create user func with facebook
    const createUserWithFacebook = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }
    // create user func with google
    const createUserWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    // create user func
    const updateProfileFunc = (displayName, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        })
    }

    // signin user func
    const signinUserFunc = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signout user func
    const signOutFunc = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const authMonitoring = onAuthStateChanged(auth, (currUser) => {
            if (currUser) {
                // const uid = user.uid;
                if (currUser) {
                    setUser(currUser)
                }
            } else {
                setUser(null)
            }
        });
        return () => {
            authMonitoring()
        }
    }, [])


    const myObj = { user, setUser, loading, setLoading, createUserWithEmailPass, createUserWithGoogle, createUserWithFacebook, createUserWithGithub, updateProfileFunc, signinUserFunc, signOutFunc }

    return (
        <myAuth.Provider value={myObj}>
            {children}
        </myAuth.Provider>
    );
};

export const useAuth = () => {
    const { user, setUser, loading, setLoading, createUserWithEmailPass, updateProfileFunc, signinUserFunc, signOutFunc } = useContext(myAuth)
    return { user, setUser, loading, setLoading, createUserWithEmailPass, updateProfileFunc, signinUserFunc, signOutFunc }
}

export default AuthProvider;