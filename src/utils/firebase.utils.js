import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged
} from 'firebase/auth';

// Please get the firebaseConfig from your own Firebase
const firebaseConfig = {
  apiKey: "Your Api Key",
  authDomain: "Your Auth Domain",
  projectId: "Your Project ID",
  storageBucket: "Your Storage Bucket",
  messagingSenderId: "Your Message Sender Id",
  appId: "Your App ID"
};
////////////////////////////////////////////////////////

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);