import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAvOk3XmuLaHkSP3isdUwpdvjO650gclKo",
    authDomain: "binge-bcf12.firebaseapp.com",
    databaseURL: "https://binge-bcf12.firebaseio.com",
    projectId: "binge-bcf12",
    storageBucket: "binge-bcf12.appspot.com",
    messagingSenderId: "1063067578738"
  };

var fire = firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default fire;