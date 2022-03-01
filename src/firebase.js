
//import firebase from "firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// 1:26:  see more
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA8mYf6rmkXB8RUi2zWBl2NyNCOJ7-0-VI",
    authDomain: "myfacebookclone-f0247.firebaseapp.com",
    projectId: "myfacebookclone-f0247",
    storageBucket: "myfacebookclone-f0247.appspot.com",
    messagingSenderId: "121038269147",
    appId: "1:121038269147:web:fab1dec2044033d5027afe",
    measurementId: "G-7Y5G4C2DF7"

});


 const db = firebaseApp.firestore()

export default db;