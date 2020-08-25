import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyANv1arH6U-womBFtHcomwsKraN4R6k4dI",
    authDomain: "dashboard-9737a.firebaseapp.com",
    databaseURL: "https://dashboard-9737a.firebaseio.com",
    projectId: "dashboard-9737a",
    storageBucket: "dashboard-9737a.appspot.com",
    messagingSenderId: "436389120197",
    appId: "1:436389120197:web:5c86f72094da13f44148ac",
    measurementId: "G-509ZF0MEJL"

});

const db = firebaseApp.firestore();


export default db;