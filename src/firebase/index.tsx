import firebase from "firebase/app";
import "firebase/storage";

let firebaseConfig = {
  apiKey: "AIzaSyADwyJleBtEZhQJtBZPvd1X9eeAZG7X2Ws",
  authDomain: "realeplat.firebaseapp.com",
  databaseURL: "https://realeplat.firebaseio.com",
  projectId: "realeplat",
  storageBucket: "realeplat.appspot.com",
  messagingSenderId: "849237656649",
  appId: "1:849237656649:web:3f9ffe1dfc6fcdbfa82b98",
  measurementId: "G-SZCTD4NEFL",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase };
