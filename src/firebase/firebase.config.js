// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6HuX5ATkOQS9vDYFv51h_GATN9S0L-os",
  authDomain: "programming-schools.firebaseapp.com",
  projectId: "programming-schools",
  storageBucket: "programming-schools.appspot.com",
  messagingSenderId: "899414428132",
  appId: "1:899414428132:web:569cd8b19f1354a0851ff1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app