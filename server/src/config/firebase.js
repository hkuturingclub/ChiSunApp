import * as FirebaseModule from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
//import firebaseConfig from '../constants/firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBP-cJ5pPw0mdFneX5TyxTCjDvq7bucT9w',
  authDomain: 'chi-sun-mobile-app.firebaseapp.com',
  databaseURL: 'https://chi-sun-mobile-app.firebaseio.com',
  projectId: 'chi-sun-mobile-app',
  storageBucket: 'chi-sun-mobile-app.appspot.com',
  messagingSenderId: '370159067229',
};

const { apiKey, authDomain, databaseURL, storageBucket, messagingSenderId, projectId } = firebaseConfig;

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
    projectId,
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
