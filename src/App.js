import { useState } from 'react';
import GamePage from './routes/Game';
import HomePage from './routes/Home';

const App = () => {
  const [page, setPage] = useState('home');

  const onChangePageHandler = (page) => {
    console.log('####: <App />');
    setPage(page);
  }
  
  switch(page) {
    case 'home':
      return <HomePage onChangePage={onChangePageHandler} />;
    case 'game':
      return <GamePage onChangePage={onChangePageHandler} />;
    default:
      return <HomePage />;
  }
};

export default App;