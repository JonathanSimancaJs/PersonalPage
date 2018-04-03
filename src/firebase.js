import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyAci77L4h-ZrsrHweZp2v2-J5dR0yfkAMU",
  authDomain: "blogpersonal-54764.firebaseapp.com",
  databaseURL: "https://blogpersonal-54764.firebaseio.com",
  projectId: "blogpersonal-54764",
  storageBucket: "blogpersonal-54764.appspot.com",
  messagingSenderId: "406381016916"  
});

export const db = firebaseApp.database();
