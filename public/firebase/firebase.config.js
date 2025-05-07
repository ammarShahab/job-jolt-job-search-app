import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// .env.local
// VITE_apiKey=AIzaSyDRdRBDkZUTjSmcpHlpCVX9E684NTBWdVE
// VITE_authDomain=b11a9-react-authenticati-66750.firebaseapp.com
// VITE_projectId=b11a9-react-authenticati-66750
// VITE_storageBucket=b11a9-react-authenticati-66750.firebasestorage.app
// VITE_messagingSenderId=54707990143
// VITE_appId=1:54707990143:web:1f68e6910f41867891994a

/* const firebaseConfig = {
  apiKey: "AIzaSyDRdRBDkZUTjSmcpHlpCVX9E684NTBWdVE",
  authDomain: "b11a9-react-authenticati-66750.firebaseapp.com",
  projectId: "b11a9-react-authenticati-66750",
  storageBucket: "b11a9-react-authenticati-66750.firebasestorage.app",
  messagingSenderId: "54707990143",
  appId: "1:54707990143:web:1f68e6910f41867891994a",
}; */

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
