import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);

    //signin with google
    const signInByGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    //signup with email password 
    const emPasSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //update user data after signup
    const updateUserData = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    //Send email verfication to register user
    const userEmailVerify = () => {
        return sendEmailVerification(auth.currentUser)
    }

    //signout user
    const logoutUser = () => {
        return signOut(auth);
    }
    //get current user data
    useEffect(() => {
        const un = onAuthStateChanged(auth, (cUser) => {
            setUser(cUser);
        });
        return () => un();
    }, [])

    //passinh all of the variable and functions 
    const authInfo = { user, signInByGoogle, logoutUser, emPasSignUp, updateUserData, userEmailVerify }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;