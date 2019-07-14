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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    /*if (!displayName) {
      displayName = additionalData;
    }*/
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
