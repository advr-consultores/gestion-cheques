
// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'
import { getMessaging } from "firebase/messaging/sw";
import { initializeApp } from "firebase/app";

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig);
const firebaseMessaging = getMessaging(app);
const auth = getAuth()

export {
    firebaseMessaging,
    auth
}