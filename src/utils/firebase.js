// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEy7XlNRfgCTL62G6qo0lYeW8adQRkWZ0",
  authDomain: "netflixgpt-a1437.firebaseapp.com",
  projectId: "netflixgpt-a1437",
  storageBucket: "netflixgpt-a1437.firebasestorage.app",
  messagingSenderId: "417303610450",
  appId: "1:417303610450:web:cd388c3d52a1843f7a8b8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();