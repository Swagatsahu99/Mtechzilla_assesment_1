// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth,GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkHSC7xNus4pzYrttOZVx_ZBguqRpw6ZY",
  authDomain: "timer--auth.firebaseapp.com",
  projectId: "timer--auth",
  storageBucket: "timer--auth.appspot.com",
  messagingSenderId: "1031760790864",
  appId: "1:1031760790864:web:88f5c4e8170144fef5d855"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth();

export const googleAuthProvider= new GoogleAuthProvider();

export default app;