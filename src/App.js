import { useLocation, Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames';

import Footer from './components/Footer';
import MenuHeader from './components/MenuHeader';
import GamePage from './routes/Game';
import HomePage from './routes/Home';
import AboutPage from './routes/About';
import NotFoundPage from './routes/NotFound';
import ContactPage from './routes/Contact';

import { FirebaseContext } from '../src/context/firebaseContext';
import Firebase from './service/firebase';

import s from './style.module.css';

const App = () => {
  const location = useLocation('');
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';

  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path="/404" component={NotFoundPage} />
        <Route>
          <>
            <MenuHeader bgActive={!isPadding}/>
            <div className={cn(s.wrap, {
              [s.isHomePage]: isPadding,
            })}>
              <Switch>
                <Route path={"/"} exact component={HomePage} />
                <Route path={"/home"} render={() => <Redirect to="/" />} />
                <Route path={"/game"} component={GamePage} />
                <Route path={"/about"} component={AboutPage} />
                <Route path={"/contact"} component={ContactPage} />
                <Route render={() => <Redirect to="/404" />} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
    </FirebaseContext.Provider>
  );
};

export default App;