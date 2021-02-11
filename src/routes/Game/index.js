import { useRouteMatch, Route, Switch } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';

import { PokemonContext } from '../../context/pokemonContext';

const GamePage = () => {
    const match = useRouteMatch();

    const [selectedPokemons, setSelectedPokemons] = useState({});

    const selectedPokemonsHandler = (key, pokemon) => {
        setSelectedPokemons(prevState => {
            if (prevState[key]) {
                const copyState = {...prevState};
                delete copyState[key];
                
                return copyState;
            }
            return {
                ...prevState,
                [key]: pokemon,
            }
        })
    }

    return (
        <PokemonContext.Provider value={{
            selectedPokemons,
            onSelectPokemons: selectedPokemonsHandler
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;