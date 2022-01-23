// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFXUYLOmU1sfA-3vj_Hx5mtJ7b7orMrzU",
  authDomain: "authentication-dac89.firebaseapp.com",
  projectId: "authentication-dac89",
  storageBucket: "authentication-dac89.appspot.com",
  messagingSenderId: "906119606745",
  appId: "1:906119606745:web:4a6b8bfe2c03fae33269c8",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };