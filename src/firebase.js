// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRV8Ht7MlDMGTon2PHjz83REParHPI71w",
  authDomain: "proyectoreact4.firebaseapp.com",
  projectId: "proyectoreact4",
  storageBucket: "proyectoreact4.appspot.com",
  messagingSenderId: "433630753650",
  appId: "1:433630753650:web:8af552232ad77d922823eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)