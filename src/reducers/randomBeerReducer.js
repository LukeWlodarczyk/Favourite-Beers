import { GET_RANDOM_BEER } from '../constants/action-types';

export default (state={}, action) => {
  switch (action.type) {
    case GET_RANDOM_BEER:
      return action.payload
    default:
      return state;
  }
};
