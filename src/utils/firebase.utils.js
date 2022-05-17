import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged
} from 'firebase/auth';

import {
  getFirestore, collection, query, where, orderBy, doc, getDoc, getDocs
} from 'firebase/firestore';

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

export const db = getFirestore();
export const getFeaturedPosts = async () => {
  const collectionRef = collection(db, 'posts');
  const q = query(collectionRef, where("isFeatured", "==", true));

  const querySnapshot = await getDocs(q);

  const allPosts = querySnapshot.docs.map(docSnapshot => {
    return {
      id: docSnapshot.id,
      data: docSnapshot.data()
    }
  });
  return allPosts;
}

export const getAllPosts = async () => {
  const collectionRef = collection(db, 'posts');
  const q = query(collectionRef, orderBy("date", "desc"));

  const querySnapshot = await getDocs(q);

  const allPosts = querySnapshot.docs.map(docSnapshot => {
    return {
      id: docSnapshot.id,
      data: docSnapshot.data()
    }
  });
  return allPosts;
}

export const getPostById = async (id) => {
  const docRef = doc(db, 'posts', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  }
  else {
    console.log("No such document!");
  }
}
