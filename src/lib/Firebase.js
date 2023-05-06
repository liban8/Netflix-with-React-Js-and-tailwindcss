// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXdk9xpwB7rLDg2Eh_HdpBn4oGmjTEch4",
  authDomain: "nftclone-6ee5d.firebaseapp.com",
  projectId: "nftclone-6ee5d",
  storageBucket: "nftclone-6ee5d.appspot.com",
  messagingSenderId: "253361116455",
  appId: "1:253361116455:web:638d8954d98660f22f4502"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(); 