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

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSocket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val());
    });
  }

  offPokemonSocket = () => {
    this.database.ref('pokemons').off();
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (newPokemon) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref('pokemons/' + newKey).set(newPokemon);
  }
}

export default Firebase;