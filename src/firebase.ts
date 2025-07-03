// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
  authDomain: "movibes-a0440.firebaseapp.com",
  projectId: "movibes-a0440",
  storageBucket: "movibes-a0440.firebasestorage.app",
  messagingSenderId: "830590605974",
  appId: "1:830590605974:web:1a4a38090c6eccb3b440b7",
  measurementId: "G-PJ4C0P8WPQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export async function signUpWithEmailPassword(email: string, password: string) {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredentials.user;
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}
export async function signInWithEmailPassword(email: string, password: string) {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredentials.user;
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}

const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const userCredentials = GoogleAuthProvider.credentialFromResult(result);
    const token = userCredentials?.accessToken;
    const user = result.user;
    console.log(token, user, "User signed In");
  } catch (err) {
    console.log(err);
  }
}

export async function logOut() {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (err) {
    console.log(err);
  }
}
