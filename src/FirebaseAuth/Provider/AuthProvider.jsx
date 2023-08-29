/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";



export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();





const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // CREATE NEW USER
  const Register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // SIGN IN A USER
  const Login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // SIGN OUT A USER
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // GOOGLE SIGN IN
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // GOOGLE SIGN IN
  const gitHubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };


  //   update Profile user 
  const profileUpdate = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    });
  }

  // CURRENTLY ACTIVE SIGN-IN USER
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
        setUser(loggedUser);
        setLoading(false);
                    // get and set token
                    if (loggedUser) {
                      axios.post('https://premium-articles-platform-sever.vercel.app/jwt', { email: loggedUser.email })
                          .then(data => {
                              // console.log(data.data.token)
                              localStorage.setItem('access-token', data.data.token)
                              setLoading(false);
                          })
                  }
                  else {
                      localStorage.removeItem('access-token')
                  }
      })

      return() => {
        unsubscribe();
      }
}, [])

  const authInfo = {
    user,
    loading,
    Register,
    Login,
    logOut,
    googleSignIn,
    gitHubSignIn,
    profileUpdate
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;