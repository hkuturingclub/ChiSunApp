import 'firebase/firestore';
import 'firebase/storage';
import * as FirebaseModule from 'firebase/app';
import firebaseConfig from '../constants/firebase';

const {
  apiKey,
  authDomain,
  databaseURL,
  storageBucket,
  messagingSenderId,
  projectId
} = firebaseConfig;

let firebaseInitialized = false;

if (
  apiKey !== 'null' &&
  authDomain !== 'null' &&
  databaseURL !== 'null' &&
  storageBucket !== 'null' &&
  messagingSenderId !== 'null'
) {
  FirebaseModule.initializeApp({
    apiKey,
    authDomain,
    databaseURL,
    storageBucket,
    messagingSenderId,
    projectId
  });

  firebaseInitialized = true;
}

let db;
let storage;
if (firebaseInitialized) {
  // Initialize Cloud Firestore through Firebase
  db = FirebaseModule.firestore();

  // Initialize Storage through Firebase
  storage = FirebaseModule.storage();
}

export const Firebase = firebaseInitialized ? FirebaseModule : null;
export const FirebaseDB = firebaseInitialized ? db : null;
export const FirebaseStorage = firebaseInitialized ? storage : null;
