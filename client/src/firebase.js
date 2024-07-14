// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kohli-s-blogsite.firebaseapp.com",
  projectId: "kohli-s-blogsite",
  storageBucket: "kohli-s-blogsite.appspot.com",
  messagingSenderId: "973082470876",
  appId: "1:973082470876:web:c59c5bda881860245a4719"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);