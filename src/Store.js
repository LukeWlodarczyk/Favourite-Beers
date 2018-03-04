import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "./reducers/rootReducer";

export const history = createHistory();

const store = createStore(rootReducer, compose(applyMiddleware(thunk, routerMiddleware(history))));
console.log(store);

export default store;
