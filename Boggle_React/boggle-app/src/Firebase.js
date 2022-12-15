/*

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu5Ls1lOz0i2JgttKU4s7XW24aUfYuPYQ",
  authDomain: "boggle-react-371700.firebaseapp.com",
  projectId: "boggle-react-371700",
  storageBucket: "boggle-react-371700.appspot.com",
  messagingSenderId: "835376725960",
  appId: "1:835376725960:web:b7552efc6bebceb71c8afd",
  measurementId: "G-8PY50N7BKQ"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); // firebase authentication object
export const firestore = firebase.firestore(); // firestore db
export default firebase;
*/

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu5Ls1lOz0i2JgttKU4s7XW24aUfYuPYQ",
  authDomain: "boggle-react-371700.firebaseapp.com",
  databaseURL: "https://boggle-react-371700-default-rtdb.firebaseio.com",
  projectId: "boggle-react-371700",
  storageBucket: "boggle-react-371700.appspot.com",
  messagingSenderId: "835376725960",
  appId: "1:835376725960:web:b7552efc6bebceb71c8afd",
  measurementId: "G-8PY50N7BKQ"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

export const auth = firebase.auth(); // firebase authentication object
export const firestore = firebase.firestore(); // firestore db
export default firebase;

/*firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/