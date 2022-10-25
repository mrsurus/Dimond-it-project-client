// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA37LtiQeJf_2CYdlIVPU-ULRcUX1NhZdo",
  authDomain: "daimond-it.firebaseapp.com",
  projectId: "daimond-it",
  storageBucket: "daimond-it.appspot.com",
  messagingSenderId: "1067738845284",
  appId: "1:1067738845284:web:2ce5512a8f818170c58f71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app