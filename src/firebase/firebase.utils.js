// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
//
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0VQRncwwrwJyEaxYk_8yIyyYhdX-mqMo",
  authDomain: "room-for-rent-2106f.firebaseapp.com",
  projectId: "room-for-rent-2106f",
  storageBucket: "room-for-rent-2106f.appspot.com",
  messagingSenderId: "253245532400",
  appId: "1:253245532400:web:e6574130cf8659c3903a35",
  measurementId: "G-K0PPW4KKT1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
