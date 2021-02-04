const GamePage = ({onChangePage}) => {
    const onClickHandler = () => {
        console.log('####: <GamePage />');
        onChangePage && onChangePage('home');
    };

    return (
        <>
            <div>
                This is Game Page!!!
            </div>
            <button onClick={onClickHandler}>
                Return Home
            </button>
        </>
    );
};

export default GamePage;