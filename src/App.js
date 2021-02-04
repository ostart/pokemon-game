import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames';

import Footer from './components/Footer';
import MenuHeader from './components/MenuHeader';
import GamePage from './routes/Game';
import HomePage from './routes/Home';
import AboutPage from './routes/About';
import NotFoundPage from './routes/NotFound';
import ContactPage from './routes/Contact';

import s from './style.module.css';

const App = () => {
  const match = useRouteMatch('/');

  return (
      <Switch>
        <Route path="/404" component={NotFoundPage} />
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact}/>
            <div className={cn(s.wrap, {
              [s.isHomePage]: match.isExact,
            })}>
              <Switch>
                <Route path={"/"} exact component={HomePage} />
                <Route path={"/game"} component={GamePage} />
                <Route path={"/about"} component={AboutPage} />
                <Route path={"/contact"} component={ContactPage} />
                <Route render={() => (
                  <Redirect to="/404" />
                )} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
  );
};

export default App;