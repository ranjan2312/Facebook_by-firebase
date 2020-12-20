import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyBp7avhwyyTs61NYXO7WB77aRXlC9gfLyQ",
    authDomain: "facebook-clone-317e2.firebaseapp.com",
    databaseURL: "https://facebook-clone-317e2.firebaseio.com",
    projectId: "facebook-clone-317e2",
    storageBucket: "facebook-clone-317e2.appspot.com",
    messagingSenderId: "904883482464",
    appId: "1:904883482464:web:1ae82e0af35ead6d05f805"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;
