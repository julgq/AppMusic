import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyDZyNuWfoLQ5ebU0xFpo8gkieOQ00Lp2lI",
    authDomain: "appmusic-869c3.firebaseapp.com",
    databaseURL: "https://appmusic-869c3.firebaseio.com",
    projectId: "appmusic-869c3",
    storageBucket: "",
    messagingSenderId: "1006783840974"
  };
  firebase.initializeApp(config);

export const firebaseAuth = firebase.auth()

export default firebase
