//@Author - James Pierce
//@Started - 28/01/2020
//@Brief - JS Script that pulls data from Google cloud firestore

//Firebase app config data
let firebaseConfig = {
    apiKey: "AIzaSyDrHxIx-NJh8LxhNa1jw9zu1Y6EZOdv4Kk",
    authDomain: "mediquery-430f7.firebaseapp.com",
    databaseURL: "https://mediquery-430f7.firebaseio.com",
    projectId: "mediquery-430f7",
    storageBucket: "mediquery-430f7.appspot.com",
    messagingSenderId: "313300086775",
    appId: "1:313300086775:web:7e5cffa97977da38bbc8f2",
    measurementId: "G-KS13F48QGP"
};

//Manually require firestore usage
const firebase = require("firebase");
require("firebase/firestore");

//Initialize firebase using app config data
firebase.initializeApp({
    apiKey: firebaseConfig.apiKey,
    authDomain: firebaseConfig.authDomain,
    projectId: firebaseConfig.projectId
});

//Request data from firestore collection
let db = firebase.firestore();
db.collection("efr").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log('${doc.id} => ${doc.data()}');
    });
});