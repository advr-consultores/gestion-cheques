
// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'
import { getMessaging } from "firebase/messaging/sw";
import { initializeApp } from "firebase/app";


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDNTExAc8-cRl1aBzJokUwjW5lW534sovY",
  authDomain: "chequesadvr.firebaseapp.com",
  projectId: "chequesadvr",
  storageBucket: "chequesadvr.appspot.com",
  messagingSenderId: "825162486096",
  appId: "1:825162486096:web:46ae51a99cb5ccc6e31c55",
  measurementId: "G-0S7RENS99H"
}

const app = initializeApp(firebaseConfig);
const firebaseMessaging = getMessaging(app);
const auth = getAuth()

export {
    firebaseMessaging,
    auth
}