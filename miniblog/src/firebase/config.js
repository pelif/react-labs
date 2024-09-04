// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFhZ6QVPhiZ9n9x-8pyASlBlhjHOMg3ts",
  authDomain: "miniblog-22de4.firebaseapp.com",
  projectId: "miniblog-22de4",
  storageBucket: "miniblog-22de4.appspot.com",
  messagingSenderId: "760228811997",
  appId: "1:760228811997:web:64cfe6019356405936b734",
  measurementId: "G-22MK3H2WHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db, app };