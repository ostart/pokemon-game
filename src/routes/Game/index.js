import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import database from '../../service/firebase';

import s from './style.module.css';

const GamePage = () => {
    const history = useHistory();

    const onClickHandler = () => {
        history.push('/');
    };

    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        });
    }, []);

    const onCardClickHandler = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.isActive = !pokemon.isActive;
                    database.ref('pokemons/'+ item[0]).set(pokemon);
                };
        
                acc[item[0]] = pokemon;
        
                return acc;
            }, {});
        });
    };

    const addNewPokemonHandler = () => {
        const newId = Math.floor(Math.random() * 100);
        const newPikachu = {
            "abilities" : [ "static", "lightning-rod" ],
            "base_experience" : 112,
            "height" : 4,
            "id" : newId,
            "img" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
            "name" : "pikachu",
            "stats" : {
              "attack" : 55,
              "defense" : 40,
              "hp" : 35,
              "special-attack" : 50,
              "special-defense" : 50,
              "speed" : 90
            },
            "type" : "electric",
            "values" : {
              "bottom" : 9,
              "left" : 6,
              "right" : "A",
              "top" : 8
            }
        };
        const newPostKey = `-MSjWsZps4Nua-${Math.random().toString(36).substring(7)}`;
        database.ref('pokemons/' + newPostKey).set(newPikachu);
        setPokemons(prevState => ({ ...prevState, [newPostKey]: newPikachu}));
    }

    return (
        <>
            <div>
                This is Game Page!!!
            </div>
            <button onClick={onClickHandler}>
                Return Home
            </button>
            <Layout id="cards" title="Cards" colorBg="#202736" colorTitle="#FEFEFE">
                <div className={s.flex}><button onClick={addNewPokemonHandler}>ADD NEW POKEMON</button></div>
                <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([k, v]) => <PokemonCard 
                        key={k} 
                        id={v.id} 
                        name={v.name} 
                        type={v.type} 
                        values={v.values} 
                        img={v.img} 
                        onCardClick={onCardClickHandler}
                        isActive={v.isActive}
                        />)
                }
                </div>
            </Layout>
        </>
    );
};

export default GamePage;