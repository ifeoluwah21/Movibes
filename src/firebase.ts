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
  authDomain: "movibes-e9f00.firebaseapp.com",
  projectId: "movibes-e9f00",
  storageBucket: "movibes-e9f00.firebasestorage.app",
  messagingSenderId: "1091184763514",
  appId: "1:1091184763514:web:cdc02fcb9032ee5bd691c3",
  measurementId: "G-LF1PV61KWG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

export async function signUpWithEmailPassword(email: string, password: string) {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredentials.user;
    return user;
  } catch (err) {
    const error = err as Error;
    return error;
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
    return user;
  } catch (err) {
    const error = err as Error;
    return error;
  }
}

const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    // const userCredentials = GoogleAuthProvider.credentialFromResult(result);
    // const token = userCredentials?.accessToken;
    const user = result.user;
    return user;
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
