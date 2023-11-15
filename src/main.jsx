import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgts9UEB62MlSSNfXr1qyy2OxwJ5cFMdg",
  authDomain: "ruta11-comidas.firebaseapp.com",
  projectId: "ruta11-comidas",
  storageBucket: "ruta11-comidas.appspot.com",
  messagingSenderId: "96555480199",
  appId: "1:96555480199:web:577a57883da46de41b7422",
  measurementId: "G-9QEKGKTRJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
     <App />
 </ChakraProvider>
  
)
