// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSVxg6zcuBko2711tD5TZFUSuKUSXZ-dw",
  authDomain: "lucky-tools-manufacturer.firebaseapp.com",
  projectId: "lucky-tools-manufacturer",
  storageBucket: "lucky-tools-manufacturer.appspot.com",
  messagingSenderId: "213467490684",
  appId: "1:213467490684:web:6ec8b64499d17e5a2b5cf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth