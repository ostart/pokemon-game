import cn from 'classnames';
import { Link } from "react-router-dom";

import s from './style.module.css';

const MENU = [
    {
        title: 'HOME',
        to: '/',
    },
    {
        title: 'GAME',
        to: '/game',
    },
    {
        title: 'ABOUT',
        to: '/about',
    },
    {
        title: 'CONTACT',
        to: '/contact',
    },
];


const Menu = ({isActive, setActive}) => {
    let localStyle = { 
        [s.active]: isActive === true, 
        [s.deactive]: isActive === false,
    };

    const onClickHandler = () => setActive(!isActive);

    return (
        <div className={cn(s.menuContainer, localStyle)}>
            <div className={s.overlay} />
            <div className={s.menuItems}>
                <ul>
                    {
                        MENU.map(({title, to}, index) => (
                            <li key={index}>
                                <Link to={to} onClick={onClickHandler}>
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Menu;