import { GET_DATA_REQUESTED, GET_DATA_DONE, GET_DATA_FAILED } from '../constants/action-types';


const initialState = {
  isLoading: false,
  isError: false,
  beers: [],
}

export default (state=initialState, action) => {
  switch (action.type) {
    case GET_DATA_REQUESTED:
      return { ...state, isLoading: true };
    case GET_DATA_DONE:
      return { ...state, isLoading: false, beers: action.payload };
    case GET_DATA_FAILED:
      return { ...state, isLoading: false, isError: true}
    default:
      return state;
  }
};
