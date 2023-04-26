import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDa0md9bwQjxV2F1_9RyLexbitNKO6yAvQ',
  authDomain: 'project-b3c61.firebaseapp.com',
  projectId: 'project-b3c61',
  storageBucket: 'project-b3c61.appspot.com',
  messagingSenderId: '417871561942',
  appId: '1:417871561942:web:f7564760e124c17b057577',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
