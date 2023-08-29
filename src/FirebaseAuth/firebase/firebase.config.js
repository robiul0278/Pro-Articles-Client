// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZQ3LjZTMM6QAvrh5XWvrclFKv61oXCzg",
  authDomain: "articles-1e71f.firebaseapp.com",
  projectId: "articles-1e71f",
  storageBucket: "articles-1e71f.appspot.com",
  messagingSenderId: "790099677435",
  appId: "1:790099677435:web:3bd3203416547b46a7a05e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;