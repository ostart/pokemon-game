import { useContext } from 'react';
import PokemonCard from '../../../../components/PokemonCard';
import { PokemonContext } from '../../../../context/pokemonContext';
import s from './style.module.css';

const BoardPage = () => {
    const { selectedPokemons } = useContext(PokemonContext);

    return (
        <div className={s.root}>
						<div className={s.playerOne}>
                            {
                                Object.values(selectedPokemons).map(v => 
                                    <PokemonCard
                                        className={s.card}
                                        key={v.id} 
                                        id={v.id} 
                                        name={v.name} 
                                        type={v.type} 
                                        values={v.values} 
                                        img={v.img} 
                                        isActive
                                        mininize
                                    />
                                )
                            }
						</div>
            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;