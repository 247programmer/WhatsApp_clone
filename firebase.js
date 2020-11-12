import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBRFNiirN8_x91tqI8459Wwyid15EptB_k",
  authDomain: "my-chat-f2d73.firebaseapp.com",
  databaseURL: "https://my-chat-f2d73.firebaseio.com",
  projectId: "my-chat-f2d73",
  storageBucket: "my-chat-f2d73.appspot.com",
  messagingSenderId: "457709148235",
  appId: "1:457709148235:web:acc8c17d83fc15d3a695ce",
  measurementId: "G-WQTCBJ8M5J"
};
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export{auth,provider};
  export default db;