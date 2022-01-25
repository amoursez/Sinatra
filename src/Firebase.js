// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfGLnzArqzrUMj-j9uKJ-VXJjdxXxu0D0",
  authDomain: "sinatra-store.firebaseapp.com",
  projectId: "sinatra-store",
  storageBucket: "sinatra-store.appspot.com",
  messagingSenderId: "410416393288",
  appId: "1:410416393288:web:cebadaaea76c92f76dfc7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)