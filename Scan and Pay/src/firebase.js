import firebase from "firebase/app";
import   "firebase/auth";
import 'firebase/firestore';
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyCkptAy9fcZaGNwLs1rNaxHVT4j0MRnmro",
    authDomain: "finayearproject.firebaseapp.com",
    projectId: "finayearproject",
    storageBucket: "finayearproject.appspot.com",
    messagingSenderId: "975499121370",
    appId: "1:975499121370:web:b3dc58aaac733fc88d4be3",
    measurementId: "G-3F2MSWDF35"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig)
  const db=firebase.firestore();
  
  export default db;