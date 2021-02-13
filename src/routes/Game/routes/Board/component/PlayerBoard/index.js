import { useState } from 'react';
import cn from 'classnames';
import PokemonCard from '../../../../../../components/PokemonCard';
import s from './style.module.css';

const PlayerBoard = ({ player, cards, onClickCard }) => {
    const [isSelected, setSelected] = useState(null);

    return (
        <>
            {
                cards.map(v => 
                    <div 
                        className={cn(s.cardBoard, {
                            [s.selected]: isSelected === v.id
                        })}
                        key={v.id}
                        onClick={() => {
                            setSelected(v.id);
                            onClickCard && onClickCard({
                                player,
                                ...v,
                            });
                        }}
                    >
                        <PokemonCard
                            key={v.id} 
                            id={v.id} 
                            name={v.name} 
                            type={v.type} 
                            values={v.values} 
                            img={v.img} 
                            isActive
                            mininize
                        />
                    </div>
                )
            }
        </>
    );
};

export default PlayerBoard;