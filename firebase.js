// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {GoogleAuthProvider,getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa0vMseZlg_n9G_FpaZGfPPcujBhC2N_w",
  authDomain: "uber-clone-fc5b0.firebaseapp.com",
  projectId: "uber-clone-fc5b0",
  storageBucket: "uber-clone-fc5b0.appspot.com",
  messagingSenderId: "986494818874",
  appId: "1:986494818874:web:c428502702449f6304b303"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider=new GoogleAuthProvider()
const auth=getAuth()
export {app,provider,auth}