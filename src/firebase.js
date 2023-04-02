import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBuedduXCh6PSPv-vSFSc2tFJIZQffENY0",
  authDomain: "falconchat-4aa49.firebaseapp.com",
  projectId: "falconchat-4aa49",
  storageBucket: "falconchat-4aa49.appspot.com",
  messagingSenderId: "1070123073827",
  appId: "1:1070123073827:web:3b8dd95e47576d65f60c96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();