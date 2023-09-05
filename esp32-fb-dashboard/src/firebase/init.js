// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL20dcAtyzYPcGbaM8hQkESI3o5vgEUto",
  authDomain: "ensee-testing.firebaseapp.com",
  databaseURL:
    "https://ensee-testing-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ensee-testing",
  storageBucket: "ensee-testing.appspot.com",
  messagingSenderId: "285458950150",
  appId: "1:285458950150:web:d90d2a41569a8eedfebb87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
export default db;
