// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAow-z3Hjh01cLsKbmq_s0SRfuKKQLu3GU",
  authDomain: "react-devtalles-99c3d.firebaseapp.com",
  projectId: "react-devtalles-99c3d",
  storageBucket: "react-devtalles-99c3d.firebasestorage.app",
  messagingSenderId: "446953594932",
  appId: "1:446953594932:web:9ecc82bdb8badefb1c2a61",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
