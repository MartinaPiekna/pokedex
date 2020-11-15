import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.html';
import './style.scss';
import { Home } from './Home/index.jsx';
import { Profile } from './Profile/index.jsx';
import { Navigation } from './Navigation/index.jsx';
import { About } from './About/index.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/:pokemon" component={Profile} />
          </Switch>
        </main>
      </Router>
    </>
  );
};

render(<App />, document.querySelector('#app'));
