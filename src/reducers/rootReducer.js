import { combineReducers } from "redux";
import allBeersReducer from './allBeersReducer';
import singleBeerReducer from './singleBeerReducer';

const rootReducer=combineReducers({
  beers: allBeersReducer,
  singleBeer: singleBeerReducer,
})
export default rootReducer;
