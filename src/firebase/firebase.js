import * as firebase from "firebase";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDEgOIerawTtMuX_kJtIIOTo3B4UesO_Ew",
  authDomain: "expensify-41cde.firebaseapp.com",
  databaseURL: "https://expensify-41cde.firebaseio.com",
  projectId: "expensify-41cde",
  storageBucket: "expensify-41cde.appspot.com",
  messagingSenderId: "149110599456",
  appId: "1:149110599456:web:cac7cfb15d31928adb3145",
  measurementId: "G-ZGLVEP8007",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// firebase.database().ref().set({
//     name: 'ifeoluwa',
//     age: 15,
//     hobby: {home: 'games', church: 'bible'}
// })

