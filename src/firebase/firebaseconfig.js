import firebase from 'firebase';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyDcNJXT9pA1Bht93CbmkCTGHb0zH-PBX6U",
    authDomain: "sociosapp-c246f.firebaseapp.com",
    projectId: "sociosapp-c246f",
    storageBucket: "sociosapp-c246f.appspot.com",
    messagingSenderId: "60274429430",
    appId: "1:60274429430:web:ae4792438328a45f128bd7",
    measurementId: "G-F65N39SHLK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const app = firebase.app();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { app, auth, googleAuthProvider }