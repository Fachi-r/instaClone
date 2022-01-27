// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFXUYLOmU1sfA-3vj_Hx5mtJ7b7orMrzU",
  authDomain: "authentication-dac89.firebaseapp.com",
  databaseURL: "https://authentication-dac89-default-rtdb.firebaseio.com",
  projectId: "authentication-dac89",
  storageBucket: "authentication-dac89.appspot.com",
  messagingSenderId: "906119606745",
  appId: "1:906119606745:web:4a6b8bfe2c03fae33269c8",
  measurementId: "G-3L6S3GMPB8"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics(app)

export { app, db, storage };