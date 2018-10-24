import * as firebase from 'firebase'; // * as takes all named exports and puts them as methods on a new variable, called firebase

const config = {
   apiKey: process.env.FIREBASE_API_KEY, // these are accessed via webpack.config, which passes them down from node. Node gets them from our dotenv files
   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
   databaseURL: process.env.FIREBASE_DATABASE_URL,
   projectId: process.env.FIREBASE_PROJECT_ID,
   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
 };

firebase.initializeApp(config); // Connect to firebase.
const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };