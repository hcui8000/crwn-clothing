import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCudz8cy-p4GXDICIshsWB5nSEpVHJaA9k",
    authDomain: "crwn-db-c21c1.firebaseapp.com",
    databaseURL: "https://crwn-db-c21c1.firebaseio.com",
    projectId: "crwn-db-c21c1",
    storageBucket: "",
    messagingSenderId: "844425904299",
    appId: "1:844425904299:web:6e851a23016e2902"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
