import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GamePage from './routes/Game';
import HomePage from './routes/Home';

const App = () => {
  const [page, setPage] = useState('home');

  const onChangePageHandler = (page) => {
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