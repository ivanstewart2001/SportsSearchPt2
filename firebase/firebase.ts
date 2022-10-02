import * as firebase from 'firebase/compat'

const firebaseConfig = {

    apiKey: "AIzaSyDWLzE35W3SUGMRIEJxiwDEfdH8_D1Pg9Y",
  
    authDomain: "sports-search-pt2.firebaseapp.com",
  
    projectId: "sports-search-pt2",
  
    storageBucket: "sports-search-pt2.appspot.com",
  
    messagingSenderId: "598171134696",
  
    appId: "1:598171134696:web:2716b53ff2397f4f82375d",
  
    measurementId: "G-WX12918XY7"
  
}
  

// Initialize Firebase
let app:any
if (firebase.default.apps.length === 0) {
  app = firebase.default.initializeApp(firebaseConfig);
} else {
  app = firebase.default.app
}

const database = firebase.default.database()
const auth = firebase.default.auth()

export { app, firebase, database, auth }