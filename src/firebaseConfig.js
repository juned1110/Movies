import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfXoPCjrL0vCefv-XKxxRoqkNojp239wI",
  authDomain: "movie-app-1110.firebaseapp.com",
  projectId: "movie-app-1110",
  storageBucket: "movie-app-1110.appspot.com",
  messagingSenderId: "39432216013",
  appId: "1:39432216013:web:1d98d50cc1792d60447884",
  measurementId: "G-FH4WCRNHK8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider);
const logOut = () => signOut(auth);

export { app, auth, signInWithGoogle, logOut };
