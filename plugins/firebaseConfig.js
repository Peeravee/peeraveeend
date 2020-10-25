import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyBgWs3nVLMXCdMpe_n8HzhZzbXtpedy3rg',
    authDomain: 'peeravee125.firebaseapp.com',
    databaseURL: 'https://peeravee125.firebaseio.com',
    projectId: 'peeravee125',
    storageBucket: 'peeravee125.appspot.com',
    messagingSenderId: '244422546801',
    appId: '1:244422546801:web:ccd7eb2e04ac039a2652d0',
    measurementId: 'G-D74WEE2F3X',
  }

  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
