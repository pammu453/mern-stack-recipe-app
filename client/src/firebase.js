import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAmMPJatUCTunu74cTB31ztfcYsBV8oukk",
    authDomain: "mern-recipe-45d2f.firebaseapp.com",
    projectId: "mern-recipe-45d2f",
    storageBucket: "mern-recipe-45d2f.appspot.com",
    messagingSenderId: "953805464900",
    appId: "1:953805464900:web:0bea510eae060c54816311",
    measurementId: "G-N6HW2CEEBD"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();