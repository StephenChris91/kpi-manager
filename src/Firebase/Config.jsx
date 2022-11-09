// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZbhKba9iF6_GX4zeWaeYwZg4kk9_Dl9k",
  authDomain: "kpi-manager-28ac3.firebaseapp.com",
  projectId: "kpi-manager-28ac3",
  storageBucket: "kpi-manager-28ac3.appspot.com",
  messagingSenderId: "487800209995",
  appId: "1:487800209995:web:3fa17869ede2ce63dc03ce",
  measurementId: "G-J64SYK3Y9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
