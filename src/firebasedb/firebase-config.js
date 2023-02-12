// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ0FEy2iWB_gUoWK3gI0_HtHn1YkXdGhA",
  authDomain: "reactproject-41dbd.firebaseapp.com",
  projectId: "reactproject-41dbd",
  storageBucket: "reactproject-41dbd.appspot.com",
  messagingSenderId: "665119134373",
  appId: "1:665119134373:web:a8e7882b8ba3cc1fb8734c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;