// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqELKDmUuClqHgBwI2WTk9zemW5GORYDY",
  authDomain: "todo-app-3ed6a.firebaseapp.com",
  projectId: "todo-app-3ed6a",
  storageBucket: "todo-app-3ed6a.appspot.com",
  messagingSenderId: "356227927477",
  appId: "1:356227927477:web:e354ea34514bdb5a081dfc",
  measurementId: "G-KC9TLHE66D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);