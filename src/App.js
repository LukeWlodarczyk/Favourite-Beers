import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Store from './Store';
import Header from './components/Header'
import BeerList from './containers/BeerList';
import Random from './containers/Random';
import BeerItemFull from './containers/BeerItemFull';
 
const App = () => (
  <Provider store={Store}>
    <Router>
      <div className="container">
        <Header />
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
