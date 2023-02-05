// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import {GoogleAuthProvides} from 'firebase/auth';
import React from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvcNajEaW7v9NStKjR0jP5iON3uBgFT0g",
  authDomain: "ucamp-c12.firebaseapp.com",
  projectId: "ucamp-c12",
  storageBucket: "ucamp-c12.appspot.com",
  messagingSenderId: "1051083470714",
  appId: "1:1051083470714:web:f52314440202cf7c4208c3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Esporta la funcionalidad de la base de datos
export const db = getFirestore(app)
//exporta la funcionalidad de autenticacion con google
//exporta const autenticacion = new GoogleAuthProvides(app)

