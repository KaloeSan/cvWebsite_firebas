// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJCOit4vASXBC_cMpzOrn-F1Zr2A2JdqA",
  authDomain: "kamil-kostka-cv.firebaseapp.com",
  projectId: "kamil-kostka-cv",
  storageBucket: "kamil-kostka-cv.appspot.com",
  messagingSenderId: "240655376477",
  appId: "1:240655376477:web:19880b9873acb83e7bedb4",
  measurementId: "G-5D5DQ4ND7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
