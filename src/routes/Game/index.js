import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import POKEMONS from '../../pokemons.json';

import s from './style.module.css';

const GamePage = () => {
    const history = useHistory();

    const onClickHandler = () => {
        history.push('/');
    };

    const [pokemons, setPokemons] = useState(POKEMONS);

    const onCardClickHandler = (id) => {
        const index = pokemons.findIndex(pokemon => pokemon.id === id);
        const selected = pokemons[index];
        selected.isActive = !selected.isActive;
        setPokemons(prevState => {
            prevState[index] = selected;
            return [...prevState];
        });
    };

    return (
        <>
            <div>
                This is Game Page!!!
            </div>
            <button onClick={onClickHandler}>
                Return Home
            </button>
            <Layout id="cards" title="Cards" colorBg="#202736" colorTitle="#FEFEFE">
                <div className={s.flex}>
                {
                    pokemons.map(i => <PokemonCard 
                        key={i.id} 
                        id={i.id} 
                        name={i.name} 
                        type={i.type} 
                        values={i.values} 
                        img={i.img} 
                        onCardClick={onCardClickHandler}
                        isActive={i.isActive}
                        />)
                }
                </div>
            </Layout>
        </>
    );
};

export default GamePage;