import firebase from 'firebase'
import 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyChne9RNw7AZfMjCsdPP7oIXBWgzYaerYk",
    authDomain: "cafathar.firebaseapp.com",
    databaseURL: "https://cafathar.firebaseio.com",
    projectId: "cafathar",
    storageBucket: "",
    messagingSenderId: "378540141449",
    appId: "1:378540141449:web:f85273e6e9e25ad10a4f58"
  };



   // Initialize Firebase
   let Firebase = firebase.initializeApp(firebaseConfig);

   export {Firebase}