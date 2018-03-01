import { GET_BEER_REQUESTED, GET_BEER_DONE, GET_BEER_FAILED } from '../constants/action-types';


const initialState = {
  isLoading: false,
  isError: false,
  beer: [],
}

export default (state=initialState, action) => {
  switch (action.type) {
    case GET_BEER_REQUESTED:
      return { ...state, isLoading: true };
    case GET_BEER_DONE:
      return { ...state, isLoading: false, beer: action.payload };
    case GET_BEER_FAILED:
      return { ...state, isLoading: false, isError: true}
    default:
      return state;
  }
};
