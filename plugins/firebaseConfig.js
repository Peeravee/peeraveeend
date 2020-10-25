import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyCGjbAdnDWfpNzkiOqEBncZQBjsFooNpD4',
    authDomain: 'vuecloud-ec1c4.firebaseapp.com',
    databaseURL: 'https://vuecloud-ec1c4.firebaseio.com',
    projectId: 'vuecloud-ec1c4',
    storageBucket: 'vuecloud-ec1c4.appspot.com',
    messagingSenderId: '634317129249',
    appId: '1:634317129249:web:e9ad2ad90d8efb34eb4560',
    measurementId: 'G-NJRLCM883T',
  }

  firebase.initializeApp(firebaseConfig)
}
export const db = firebase.firestore()
