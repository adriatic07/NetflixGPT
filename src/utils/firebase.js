// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzjpcfiLfbeckS_570MmDYxC47MaiP1YM",
  authDomain: "netflixgpt-903b8.firebaseapp.com",
  projectId: "netflixgpt-903b8",
  storageBucket: "netflixgpt-903b8.appspot.com",
  messagingSenderId: "1016796339413",
  appId: "1:1016796339413:web:eb9655edd5ebd2c3ed965c",
  measurementId: "G-465DF1WHKX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
