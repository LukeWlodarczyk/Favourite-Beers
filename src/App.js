import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import BeerList from './components/BeerList';
import Random from './components/Random';
import BeerItemFull from './components/BeerItemFull';
 
const App = ({ store }) => (
  <Provider store={store}>
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
 
App.propTypes = {
  store: PropTypes.object.isRequired
}
 
export default App
