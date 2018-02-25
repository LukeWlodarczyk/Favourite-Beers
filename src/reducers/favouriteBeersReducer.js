import { ADD_FAVOURITE_BEER, DELETE_FAVOURITE_BEER } from '../constants/action-types';

export default (state=[], action) => {
  switch (action.type) {
    case ADD_FAVOURITE_BEER:
      return [action.payload, ...state];
    case DELETE_FAVOURITE_BEER:
      return state.filter( beer => beer.id !== action.payload);
    default:
      return state;
  }
};
