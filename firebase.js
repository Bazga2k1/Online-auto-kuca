// Import the functions you need from the SDKs you need
//import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { doc, addDoc, getDoc, setDoc, getDocs, getFirestore, collection, query, onSnapshot, where} from 'firebase/firestore/lite'
import { getAuth, updatePassword, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from 'firebase/auth'
import { getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADDyR6hhiSmD3mtaQiGfJW5lmfCMX-dpQ",
  authDomain: "online-auto-kuca.firebaseapp.com",
  projectId: "online-auto-kuca",
  storageBucket: "online-auto-kuca.appspot.com",
  messagingSenderId: "372048392789",
  appId: "1:372048392789:web:66229c93cd9185c8b35adc",
  measurementId: "G-VFVN7ZCRVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { app,
  auth,
  storage,
  db,
  getAuth,
  doc,
  getDoc,
	setDoc,
  addDoc,
	createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  ref,
  uploadBytes,
  getDownloadURL,
  signOut,
  updatePassword,
  collection,
  query,
  getDocs,
  onSnapshot,
  where,
}