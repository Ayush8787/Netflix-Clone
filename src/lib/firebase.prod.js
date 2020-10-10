import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAS1rrgV3rnAF2M-4PiLQE5w9cQ0UaZJz0",
  authDomain: "netflix-f34c2.firebaseapp.com",
  databaseURL: "https://netflix-f34c2.firebaseio.com",
  projectId: "netflix-f34c2",
  storageBucket: "netflix-f34c2.appspot.com",
  messagingSenderId: "603578842914",
  appId: "1:603578842914:web:f1b4edc1487453fccf2f7b",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
