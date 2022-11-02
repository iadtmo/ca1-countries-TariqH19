// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_cWPIsRqstj8mueBDuHgU9km0DMxntAk",
  authDomain: "react-countries-a50f1.firebaseapp.com",
  projectId: "react-countries-a50f1",
  storageBucket: "react-countries-a50f1.appspot.com",
  messagingSenderId: "1095649592978",
  appId: "1:1095649592978:web:ce83c681c49bb8e99f484b",
  measurementId: "G-HX22NB926H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
