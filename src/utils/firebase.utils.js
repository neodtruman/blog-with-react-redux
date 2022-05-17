import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged
} from 'firebase/auth';

import {
  getFirestore, doc, getDoc, getDocs, updateDoc, collection, query, where, orderBy
} from 'firebase/firestore';

// Please get the firebaseConfig from your own Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDxYZO-VS04HLs2Vr0TKRfVUgMTRP8_jew",
  authDomain: "cool-blog-c4470.firebaseapp.com",
  projectId: "cool-blog-c4470",
  storageBucket: "cool-blog-c4470.appspot.com",
  messagingSenderId: "467955611044",
  appId: "1:467955611044:web:176c25a2f7e2d057ac3d31"
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

export const addCommentToPost = async (postId, userDisplayName, comment) => {
  try {
    const docRef = doc(db, 'posts', postId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const createdAt = new Date();
      const newComment = {
        user: userDisplayName,
        comment,
        createdAt: createdAt.getTime()
      };
      const data = docSnap.get('comments');
      let newData = null;
      if (data) {
        newData = {
          comments: [...data, newComment]
        };
      }
      else {
        newData = {
          comments: [newComment]
        };
      }
      await updateDoc(docRef, newData);

      return newData;
    }
  }
  catch (error) {
    console.log(error.message || 'Adding comment failed!')
  }
}
