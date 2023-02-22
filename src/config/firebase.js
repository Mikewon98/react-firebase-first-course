import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPndK3TNp3gxBgvFEA3ZhvGC3KL9m7GBc",
  authDomain: "pedro-firebase-b52d4.firebaseapp.com",
  projectId: "pedro-firebase-b52d4",
  storageBucket: "pedro-firebase-b52d4.appspot.com",
  messagingSenderId: "620333082223",
  appId: "1:620333082223:web:6e737de9b3fdb8bc644f9a",
  measurementId: "G-RH7VR5JT15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
