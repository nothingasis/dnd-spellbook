import firebase from 'firebase'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC68C6wzmPOd0N9QvEVwqnSmEbEKxnbtWM',
  authDomain: 'pocket-spellbook.firebaseapp.com',
  databaseURL: 'https://pocket-spellbook.firebaseio.com',
  projectId: 'pocket-spellbook',
  storageBucket: 'pocket-spellbook.appspot.com',
  messagingSenderId: '124071312048'
})

export default firebaseApp.firestore()
