// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBP4FrkSoaVCaaGQmg9vUwbanJdEzM4MpI",
    authDomain: "amaze-1fcc3.firebaseapp.com",
    projectId: "amaze-1fcc3",
    storageBucket: "amaze-1fcc3.appspot.com",
    messagingSenderId: "185451568217",
    appId: "1:185451568217:web:161b770fab74b334492548",
    measurementId: "G-123ZQCZ6T7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};