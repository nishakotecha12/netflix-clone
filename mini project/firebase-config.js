
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDG2h2TnKj0on_H2loaeUHZxVOtuIqXtXY",
  authDomain: "react-netflix-clone-d2768.firebaseapp.com",
  projectId: "react-netflix-clone-d2768",
  storageBucket: "react-netflix-clone-d2768.firebasestorage.app",
  messagingSenderId: "1054385167410",
  appId: "1:1054385167410:web:4a839c5df0b17b7417302b",
  measurementId: "G-HBD1Z9Q3BD"
};


const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);