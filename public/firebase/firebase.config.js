// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRdRBDkZUTjSmcpHlpCVX9E684NTBWdVE",
  authDomain: "b11a9-react-authenticati-66750.firebaseapp.com",
  projectId: "b11a9-react-authenticati-66750",
  storageBucket: "b11a9-react-authenticati-66750.firebasestorage.app",
  messagingSenderId: "54707990143",
  appId: "1:54707990143:web:1f68e6910f41867891994a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
