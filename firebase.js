import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD0f7BkNFrmFuS16IP0tPELlTN5Zb5fsGQ",
    authDomain: "uchoice-chat.firebaseapp.com",
    projectId: "uchoice-chat",
    storageBucket: "uchoice-chat.appspot.com",
    messagingSenderId: "9879758400",
    appId: "1:9879758400:web:dd0a5aca6c48f9b9d621a5",
    measurementId: "G-XNJV5NFM12"
};

export default !Firebase.apps.length 
  ? Firebase.initializeApp(firebaseConfig).firestore()
  : Firebase.app().firestore();

const db = Firebase.firestore();

const auth = Firebase.auth();

const provider = new Firebase.auth.GoogleAuthProvider();
const bookProvider = new Firebase.auth.FacebookAuthProvider();

export {db, auth , provider , bookProvider};