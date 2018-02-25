import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BeerList from './components/BeerList';
import Favourites from './components/Favourites';
 
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
    <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favourites">Your favourites</Link>
          </li>
        </ul>

        <Route exact path="/" component={BeerList} />
        <Route path="/favourites" component={Favourites} />
      </div>
    </Router>

  </Provider>
)
 
Root.propTypes = {
  store: PropTypes.object.isRequired
}
 
export default Root
