import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWwOVEpXf18qldLxVeliADRu_u4RFWhNA",
  authDomain: "whatapp-clone-react.firebaseapp.com",
  databaseURL: "https://whatapp-clone-react.firebaseio.com",
  projectId: "whatapp-clone-react",
  storageBucket: "whatapp-clone-react.appspot.com",
  messagingSenderId: "1056596110955",
  appId: "1:1056596110955:web:dc4ea1b9e0593cd5570b2e",
  measurementId: "G-H0QPK41YJK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
