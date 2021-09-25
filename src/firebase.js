import * as firebase from 'firebase';
import {firebaseConfig} from './config';
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//initializeApp(firebaseConfig);
console.log("firebase~~", firebase.database());

const databaseRef = firebase.database().ref();
//const databaseRef = database().ref();
export const freeTimeRef = databaseRef.child('freeTime');
export const lengthRef = databaseRef.child('length');
export const connectRef = databaseRef.child('connect');
export const percentRef = databaseRef.child('percent');