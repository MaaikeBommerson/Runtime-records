// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOCUq-dfCuSaUAhomCbMe_qPBEdZqacIM",
  authDomain: "runtime-records-908fb.firebaseapp.com",
  projectId: "runtime-records-908fb",
  storageBucket: "runtime-records-908fb.appspot.com",
  messagingSenderId: "780227534658",
  appId: "1:780227534658:web:0a6b247002ca93d57e72db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getFirestore(app)

export { app, database }