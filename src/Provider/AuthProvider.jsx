import React, { createContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import app from '../Firebase/Firebase'

export const AuthContext = createContext(null)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)

  const [user, setUser] = useState(null)
  // console.log(user);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const userLogIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const updateUser = (updatedData) => {
    setLoading(true)
    return updateProfile(auth.currentUser, updatedData)
  }

  const logOut = () => {
    return signOut(auth)
  }

  const fotgotpass = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const authData = {
    createUser,
    userLogIn,
    googleSignIn,
    user,
    setUser,
    updateUser,
    logOut,
    loading,
    setLoading,
    auth,
    fotgotpass,
  }

  return <AuthContext value={authData}>{children}</AuthContext>
}

export default AuthProvider
