import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvdprsLAgTclE753Yd088iQaMzj0RkiZ4",
    authDomain: "asnd-media.firebaseapp.com",
    projectId: "asnd-media",
    storageBucket: "asnd-media.appspot.com",
    messagingSenderId: "18452507217",
    appId: "1:18452507217:web:ccce501c169a2efa30e670",
    measurementId: "G-E6YTX38DP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
