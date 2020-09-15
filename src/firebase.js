import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyASbla8_YTm_oFY-rVoTSHCBLUOTNkZcd8",
  authDomain: "fir-824fa.firebaseapp.com",
  databaseURL: "https://fir-824fa.firebaseio.com",
  projectId: "fir-824fa",
  storageBucket: "fir-824fa.appspot.com",
  messagingSenderId: "89173553314",
  appId: "1:89173553314:web:cc5efecbd139f4bf98e7fb",
  measurementId: "G-SHLL4Y49CB"
});

const auth = firebase.auth();

export { auth };