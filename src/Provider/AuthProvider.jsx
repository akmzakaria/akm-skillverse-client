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
import Swal from 'sweetalert2'
import app from '../Firebase/Firebase'

export const AuthContext = createContext(null)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  // Register
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password).then((res) => {
      Swal.fire({
        title: 'Registration Successful ',
        text: 'Welcome to the platform!',
        icon: 'success',
        confirmButtonColor: '#3085d6',
      })
      return res
    })
  }

  // Login
  const userLogIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password).then((res) => {
      Swal.fire({
        title: 'Logged in Successfully',
        text: 'Welcome back!',
        icon: 'success',
        confirmButtonColor: '#3085d6',
      })
      return res
    })
  }

  // Google Login
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider).then((res) => {
      Swal.fire({
        title: 'Logged in Successfully',
        text: 'Welcome back!',
        icon: 'success',
        confirmButtonColor: '#3085d6',
      })
      return res
    })
  }

  // Logout
  const logOut = () => {
    return signOut(auth).then(() => {
      Swal.fire({
        title: 'Logged Out Successfully',
        text: 'You have successfully logged out.',
        icon: 'info',
        confirmButtonColor: '#3085d6',
      })
    })
  }

  const updateUser = (updatedData) => {
    setLoading(true)
    return updateProfile(auth.currentUser, updatedData)
  }

  const fotgotpass = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
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

  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
}

export default AuthProvider
