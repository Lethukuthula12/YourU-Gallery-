// import firebase
import * as firebase from "firebase/app";
import "firebase/storage"; //storage
import "firebase/firestore"; //database


var firebaseConfig = {
    apiKey: "AIzaSyBlgTUPqT3JRd9RR-NCAkmO6Mv32apyVd0",
    authDomain: "youru-b1117.firebaseapp.com",
    databaseURL: "https://youru-b1117.firebaseio.com",
    projectId: "youru-b1117",
    storageBucket: "youru-b1117.appspot.com",
    messagingSenderId: "160942210574",
    appId: "1:160942210574:web:940a419553814dc80a065f",
    measurementId: "G-SNBQFT0136"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFirestore, projectStorage, timestamp};
