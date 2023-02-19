import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "expertguru.firebaseapp.com",
  databaseURL: "https://reactnativefirebase-00000.firebaseio.com",
  projectId: "expertguru",
  storageBucket: "expertguru.appspot.com",
  messagingSenderId: "000000000000000",
  appId: process.env.REACT_APP_FIREBAS_APP_ID ,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
