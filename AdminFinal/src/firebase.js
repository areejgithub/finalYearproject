import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkptAy9fcZaGNwLs1rNaxHVT4j0MRnmro",
  authDomain: "finayearproject.firebaseapp.com",
  projectId: "finayearproject",
  storageBucket: "finayearproject.appspot.com",
  messagingSenderId: "975499121370",
  appId: "1:975499121370:web:b3dc58aaac733fc88d4be3",
  measurementId: "G-3F2MSWDF35",
};
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
export { storage, db as default };
// const storage = firebase.storage();
// const db = firebase.firestore();
// export { storage, db as default };
