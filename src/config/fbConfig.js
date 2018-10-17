import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyADJsw6gBBpSEFnkHH9dLA0wZEGxkfqAIY",
    authDomain: "managementapp-7731a.firebaseapp.com",
    databaseURL: "https://managementapp-7731a.firebaseio.com",
    projectId: "managementapp-7731a",
    storageBucket: "managementapp-7731a.appspot.com",
    messagingSenderId: "842846912201"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;