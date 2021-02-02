import cn from 'classnames';
import s from './style.module.css';


const NavBar = ({isActive, setActive}) => {
    const localStyle = isActive ? s.active : '';
    const onClickHandler = () => setActive(!isActive);
    return (
        <nav id={s.navbar}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a className={cn(s.menuButton,  localStyle)} onClick={onClickHandler}>
                    <span />
                </a>
            </div>
        </nav>
    );
};

export default NavBar;