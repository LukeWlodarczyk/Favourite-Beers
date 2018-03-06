import { GET_BEERS_REQUESTED, GET_BEERS_DONE, GET_BEERS_FAILED } from '../constants/action-types';


const initialState = {
  isLoading: false,
  isError: false,
  beers: [],
}

export default (state=initialState, action) => {
  console.log(action)
  switch (action.type) {
    case GET_BEERS_REQUESTED:
      return { ...state, isLoading: true };
    case GET_BEERS_DONE:
      return { ...state, isLoading: false, beers: action.payload };
    case GET_BEERS_FAILED:
      return { ...state, isLoading: false, isError: true}
    default:
      return state;
  }
};
