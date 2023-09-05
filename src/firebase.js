import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCvFEKCeRx7-fAkG-zMWVMmgtvkeHG7JHU",
    authDomain: "disneyplus-clone-bd298.firebaseapp.com",
    projectId: "disneyplus-clone-bd298",
    storageBucket: "disneyplus-clone-bd298.appspot.com",
    messagingSenderId: "604546034387",
    appId: "1:604546034387:web:1274c935bf49a732f24226",
    measurementId: "G-YG2DQJX9V0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
