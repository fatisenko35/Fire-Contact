// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhQkmShGrF4ZSdqHLCnhU7IwqH6fctN6A",
  authDomain: "fatihsenko-firebase-app.firebaseapp.com",
  databaseURL: "https://fatihsenko-firebase-app-default-rtdb.firebaseio.com",
  projectId: "fatihsenko-firebase-app",
  storageBucket: "fatihsenko-firebase-app.appspot.com",
  messagingSenderId: "863208855169",
  appId: "1:863208855169:web:153dbc7382088b68df1f80",
  measurementId: "G-7FL1WJX4ZT"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
