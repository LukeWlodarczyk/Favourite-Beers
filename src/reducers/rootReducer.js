import { combineReducers } from "redux";
import getBeersReducer from './getBeersReducer';
import favouriteBeersReducer from './getBeersReducer';

const rootReducer=combineReducers({
  beers: getBeersReducer,
  favBeers: favouriteBeersReducer,
})
export default rootReducer;
