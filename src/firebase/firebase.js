// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDT147Jy9DhUTIMpabM8LlnC5ABGG-EwVY",
  authDomain: "vardaanfarmsformbackend.firebaseapp.com",
  projectId: "vardaanfarmsformbackend",
  storageBucket: "vardaanfarmsformbackend.firebasestorage.app",
  messagingSenderId: "106605212496",
  appId: "1:106605212496:web:24cf09c8bb4819be16b255",
  measurementId: "G-PFBZGBVSF6",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
