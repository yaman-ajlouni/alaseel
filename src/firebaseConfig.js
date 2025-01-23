// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfB71aQL57WoL2_-j7MemAQBWNXt6wik8",
  authDomain: "al-aseel-746d2.firebaseapp.com",
  projectId: "al-aseel-746d2",
  storageBucket: "al-aseel-746d2.firebasestorage.app",
  messagingSenderId: "893559636612",
  appId: "1:893559636612:web:1b592bbb8fb29c23f1b8d1",
  measurementId: "G-LZ1MBPN7ZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
