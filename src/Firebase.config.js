
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBGnsGBJfplRe4ER1KYME0fwncFlkMuERY",
  authDomain: "sqoare-568fd.firebaseapp.com",
  projectId: "sqoare-568fd",
  storageBucket: "sqoare-568fd.appspot.com",
  messagingSenderId: "1036925500930",
  appId: "1:1036925500930:web:2f863048e122133f9cf11b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore();