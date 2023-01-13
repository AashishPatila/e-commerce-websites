
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhhhsOqMq_eCmhl73SeXL6_ZMcWemhkw8",
  authDomain: "e-commerce-websites-c015e.firebaseapp.com",
  projectId: "e-commerce-websites-c015e",
  storageBucket: "e-commerce-websites-c015e.appspot.com",
  messagingSenderId: "119377161446",
  appId: "1:119377161446:web:dc734b7c4ff0f878885f27",
  measurementId: "G-BP3ZW0LCZQ"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth();

export { app, auth };
