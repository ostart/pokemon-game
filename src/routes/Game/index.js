import { useHistory } from 'react-router-dom';

const GamePage = () => {
    const history = useHistory();

    const onClickHandler = () => {
        history.push('/');
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