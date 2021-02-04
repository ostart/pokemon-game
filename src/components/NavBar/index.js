import cn from 'classnames';
import s from './style.module.css';


const NavBar = ({isActive, bgActive = false, setActive}) => {
    const localStyle = isActive ? s.active : '';
    const onClickHandler = () => setActive(!isActive);
    return (
        <nav id={s.navbar} className={cn({
            [s.bgActive]: bgActive,
        })}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <div className={cn(s.menuButton,  localStyle)} onClick={onClickHandler}>
                    <span />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;