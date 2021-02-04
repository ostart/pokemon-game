import s from './style.module.css';

const Header = ({title, descr, onClickButton}) => {
    const onClickHandler = () => {
        console.log("####: <Header />");
        onClickButton && onClickButton('game');
    }
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                {title && <h1>{title}</h1>}
                {descr && <p>{descr}</p>}
                <button onClick={onClickHandler}>
                    Start Game
                </button>
            </div>
        </header>
    );
}

export default Header;