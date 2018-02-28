import fetch from 'isomorphic-fetch';
import { GET_DATA_REQUESTED, GET_DATA_DONE, GET_DATA_FAILED, GET_RANDOM_BEER } from '../constants/action-types';


const getDataRequested = () => {
  return {
    type: GET_DATA_REQUESTED
  };
}

const getDataDone = data => {
  return {
    type: GET_DATA_DONE,
    payload: data
  };
}

const getDataFailed = () => {
  return {
    type: GET_DATA_FAILED
  };
}

export const getBeers = () => dispatch => {

  dispatch(getDataRequested());

  let url = 'https://api.punkapi.com/v2/beers';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      dispatch(getDataDone(data));
    })
    .catch(error => {
      dispatch(getDataFailed(error));
    })
}



const getRandomBeer = beer => {
  return {
    type: 'GET_RANDOM_BEER',
  };
}




















//
// export const addUser = user => dispatch => dispatch(addUserAsync(user))
//
// export const addUserAsync = user => {
//     return {
//       type: ADD_USER,
//       payload: user
//     };
// }
//
// export const updateUser = user => dispatch => dispatch(updateUserAsync(user))
//
// export const updateUserAsync = user => {
//     return {
//       type: UPDATE_USER,
//       payload: user
//     };
// }
//
// export const deleteUser = id => dispatch => dispatch(deleteUserAsync(id))
//
// export const deleteUserAsync = id => {
//     return {
//       type: DELETE_USER,
//       payload: id
//     };
// }
