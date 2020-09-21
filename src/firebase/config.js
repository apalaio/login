import firebase from "firebase/app";
import "firebase/firebase-auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmBZm6iQCABg589UWJi8TyWUMt1Afu3S4",
  authDomain: "sudoku-e96df.firebaseapp.com",
  databaseURL: "https://sudoku-e96df.firebaseio.com",
  projectId: "sudoku-e96df",
  storageBucket: "sudoku-e96df.appspot.com",
  messagingSenderId: "346183917387",
  appId: "1:346183917387:web:0d4b7bc06a7f50b15452ce",
  measurementId: "G-4C99529MRS",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
