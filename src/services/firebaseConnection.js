import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyC0-M6HYZuxpM9LR4rsh7EndpsTDrBB2zE",
    authDomain: "app-financas-76541.firebaseapp.com",
    databaseURL: "https://app-financas-76541.firebaseio.com",
    projectId: "app-financas-76541",
    storageBucket: "app-financas-76541.appspot.com",
    messagingSenderId: "788137930943",
    appId: "1:788137930943:web:c081d1413a932b28b9d60a",
    measurementId: "G-PKBQH1HVXZ"
  };
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

 export default firebase;