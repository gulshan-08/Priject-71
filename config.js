import firebase from "firebase";
require("@firebase/firestore");


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbCGHt1tpr6L0Uzw-LxhA3vfCzGz2pDjY",
  authDomain: "project-71-91344.firebaseapp.com",
  projectId: "project-71-91344",
  storageBucket: "project-71-91344.appspot.com",
  messagingSenderId: "922993601019",
  appId: "1:922993601019:web:2d5a0b5aed687feb48035e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
