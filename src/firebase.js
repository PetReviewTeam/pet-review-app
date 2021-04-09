import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBRn-_RCoUoZapMdI_X9UR9sDUeY-NMabk",
    authDomain: "dana-peter-pet-app.firebaseapp.com",
    databaseURL: "https://dana-peter-pet-app-default-rtdb.firebaseio.com",
    projectId: "dana-peter-pet-app",
    storageBucket: "dana-peter-pet-app.appspot.com",
    messagingSenderId: "144782458747",
    appId: "1:144782458747:web:898f344607a42c2d1787de"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;