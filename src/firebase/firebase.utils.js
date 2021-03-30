import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    
        apiKey: "AIzaSyBg-M0we2uWmYUQQjDpTKBNrjYXu_h-8uc",
        authDomain: "crown-db-f0dd4.firebaseapp.com",
        projectId: "crown-db-f0dd4",
        storageBucket: "crown-db-f0dd4.appspot.com",
        messagingSenderId: "819374808357",
        appId: "1:819374808357:web:44f05cf72e672e8fe54ecc",
        measurementId: "G-CZPLN07L4D"
      
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;