import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCVSli_QlHbsr2NY8u4UPdKh8S26ogMD_Q",
  authDomain: "chatty-87bbb.firebaseapp.com",
  projectId: "chatty-87bbb",
  storageBucket: "chatty-87bbb.appspot.com",
  messagingSenderId: "919746681162",
  appId: "1:919746681162:web:8151486c2fc1e5deeec9b3"
}).auth();