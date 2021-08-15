import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-ave87Cz_1MNvDXaY4uuiu1XsF3gYKRg",
  authDomain: "whatsapp-web-687a2.firebaseapp.com",
  projectId: "whatsapp-web-687a2",
  storageBucket: "whatsapp-web-687a2.appspot.com",
  messagingSenderId: "558807188389",
  appId: "1:558807188389:web:f8415c718de732396b5e4c",
  measurementId: "G-NVJ25GPLCC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
