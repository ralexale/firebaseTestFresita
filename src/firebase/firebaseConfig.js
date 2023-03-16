import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAqxIfnbryRFV0t7lHwyhEofDp3bDVHR9w",
  authDomain: "finanzasredux.firebaseapp.com",
  projectId: "finanzasredux",
  storageBucket: "finanzasredux.appspot.com",
  messagingSenderId: "102234010694",
  appId: "1:102234010694:web:827ac903f10878dd2f8647"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);