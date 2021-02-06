import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCGeRCIEvxo5iEIkCqFhOMQZhTG9pLzf7c",
    authDomain: "pokemon-game-e5526.firebaseapp.com",
    databaseURL: "https://pokemon-game-e5526-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-e5526",
    storageBucket: "pokemon-game-e5526.appspot.com",
    messagingSenderId: "971266589743",
    appId: "1:971266589743:web:4f298fca8dc7678f4272da"
  };
  
firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();
export default database;