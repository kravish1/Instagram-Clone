import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyClDhDqly_qWI5wTMfVrxVAWb-_PpjzTYs",
    authDomain: "instagram-clone-beb81.firebaseapp.com",
    databaseURL: "https://instagram-clone-beb81.firebaseio.com",
    projectId: "instagram-clone-beb81",
    storageBucket: "instagram-clone-beb81.appspot.com",
    messagingSenderId: "386283323096",
    appId: "1:386283323096:web:a9825b8ff7a430cb5361ad",
    measurementId: "G-XNY53CB9BB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider,storage};
  export default db;