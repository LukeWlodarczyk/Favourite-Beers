import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Store from "./Store";
import BeerList from './containers/BeerList';
import Random from './containers/Random';
import BeerItemFull from './containers/BeerItemFull';
 
const App = () => (
  <Provider store={Store}>
    <Router>
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/random">Random Beer</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={BeerList} />
          <Route path="/random" component={Random} />
          <Route path="/:id" component={BeerItemFull} />
        </Switch>
      </div>
    </Router>
  </Provider>
)
 
export default App
