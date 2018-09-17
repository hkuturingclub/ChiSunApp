import * as FirebaseModule from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '../constants/firebase';

const {
  apiKey,
  authDomain,
  databaseURL,
  storageBucket,
  messagingSenderId,
  projectId,
} = firebaseConfig;

let firebaseInitialized = false;

if (
  apiKey !== 'null'
  && authDomain !== 'null'
  && databaseURL !== 'null'
  && storageBucket !== 'null'
  && messagingSenderId !== 'null'
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
if (firebaseInitialized) {
  // Initialize Cloud Firestore through Firebase
  db = FirebaseModule.firestore();

  // Disable deprecated features
  db.settings({
    timestampsInSnapshots: true,
  });

  db.enablePersistence().catch((err) => {
    if (err.code === 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      console.error(`Error enabling firestore persistence: ${err.code}`);
    } else if (err.code === 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      console.error(`Error enabling firestore persistence: ${err.code}`);
    }
  });
  // Subsequent queries will use persistence, if it was enabled successfully
}

export const FirebaseDB = firebaseInitialized ? db : null;
export const Firebase = firebaseInitialized ? FirebaseModule : null;
