import * as admin from 'firebase-admin';

const serviceAccount = require('../secret.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://chi-sun-mobile-app.firebaseio.com',
});

export const FirebaseAdmin = admin;
