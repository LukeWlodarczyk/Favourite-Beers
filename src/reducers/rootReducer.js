import { combineReducers } from "redux";
import beersReducer from './beersReducer';
import randomBeerReducer from './randomBeerReducer';

const rootReducer=combineReducers({
  beers: beersReducer,
  randomBeer: randomBeerReducer,
})
export default rootReducer;
