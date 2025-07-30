  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyBpz2tWMdqPQ5Z9d5_e2LZgFh32V3lANk0",
  authDomain: "gercystedsar.firebaseapp.com",
  projectId: "gercystedsar",
  storageBucket: "gercystedsar.firebasestorage.app",
  messagingSenderId: "372928832162",
  appId: "1:372928832162:web:a5f9deb189ad3f2e0b6dfb",
  measurementId: "G-DLTGNJ386D"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const storage = getStorage(app);
