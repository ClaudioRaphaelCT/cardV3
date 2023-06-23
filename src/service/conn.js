import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyCBtrKEWY9LnzltCv_olWRECUlDlQRfjEA",
  authDomain: "raphaerhaiv2.firebaseapp.com",
  projectId: "raphaerhaiv2",
  storageBucket: "raphaerhaiv2.appspot.com",
  messagingSenderId: "506966524459",
  appId: "1:506966524459:web:156b1190c4b2fd60dd606e",
  measurementId: "G-CQGZ5LG8SS",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
export default db;
