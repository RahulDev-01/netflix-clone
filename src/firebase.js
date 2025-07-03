// firebase.js - Firebase setup and exports

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";  // Correct imports for Firestore functions
import { toast } from "react-toastify";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLyAz9cUOPmDlm8Gsx92DkvahmNcq4GaI",
  authDomain: "netflix-clone1-cbe35.firebaseapp.com",
  projectId: "netflix-clone1-cbe35",
  storageBucket: "netflix-clone1-cbe35.firebasestorage.app",
  messagingSenderId: "1037278977554",
  appId: "1:1037278977554:web:5c1bf89fb6995cd1a342cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Function for SignUp
const signup = async (name, email, password) => {
  try {
    // Create a new user in Firebase Authentication
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;  // Firebase Authentication user object

    // Store additional user data (name, email) in Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

    console.log('User signed up successfully and data saved to Firestore!');
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
    
  }
};

// Function for Login
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in successfully!');
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};

// Function for Logout
const logout = () => {
  signOut(auth);
  console.log('User logged out');
};

export { auth, db, login, signup, logout };
