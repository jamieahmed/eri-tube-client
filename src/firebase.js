// Google 
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyANZgVgTjaletBtvis4sMIbmBBTb_8-XFQ",
    authDomain: "eri-tube-32810.firebaseapp.com",
    projectId: "eri-tube-32810",
    storageBucket: "eri-tube-32810.appspot.com",
    messagingSenderId: "283490463112",
    appId: "1:283490463112:web:7f6532857ebd405a9ede3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app;