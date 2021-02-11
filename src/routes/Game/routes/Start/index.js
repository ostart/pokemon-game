import { useHistory } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import PokemonCard from '../../../../components/PokemonCard';

import { FirebaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';

import s from './style.module.css';

const StartPage = () => {
    const history = useHistory();
    const firebase = useContext(FirebaseContext);
    const pokemonsContext = useContext(PokemonContext);

    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        firebase.getPokemonSocket((pokemons) => {
            setPokemons(pokemons);
        });
        return () => firebase.offPokemonSocket();
    }, []);

    const onCardSelectedHandler = (key) => {
        const pokemon = {...pokemons[key]};
        pokemonsContext.onSelectPokemons(key, pokemon);

        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                isSelected: !prevState[key].isSelected,
            }
        }))
    };

    const onClickStartGameHandler = () => {
        history.push('/game/board');
    };

    return (
        <>
            <div className={s.buttonWrap}>
                <button onClick={onClickStartGameHandler} disabled={Object.keys(pokemonsContext.selectedPokemons).length < 5}>
                    Start Game
                </button>
            </div>
            <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([k, v]) => 
                        <PokemonCard 
                            className={s.card}
                            key={k} 
                            id={v.id} 
                            name={v.name} 
                            type={v.type} 
                            values={v.values} 
                            img={v.img} 
                            isActive={true}
                            isSelected={v.isSelected}
                            onCardClick={() => {
                                if (Object.keys(pokemonsContext.selectedPokemons).length < 5 || v.isSelected) {
                                        onCardSelectedHandler(k);
                                    }
                                }                                    
                            }
                        />)
                }
            </div>
        </>
    );
};

export default StartPage;