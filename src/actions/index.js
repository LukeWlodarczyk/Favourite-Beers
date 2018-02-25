import fetch from 'isomorphic-fetch';
// import { ADD_FAVOURITE_BEER, DELETE_FAVOURITE_BEER } from '../constants/action-types';

const getDataRequested = () => {
  return {
    type: 'GET_DATA_REQUESTED'
  };
}

const getDataDone = data => {
  return {
    type: 'GET_DATA_DONE',
    payload: data
  };
}

const getDataFailed = error => {
  return {
    type: 'GET_DATA_FAILED',
    payload: error
  };
}

export const getBeers = random => dispatch => {
  // set state to "loading"
  dispatch(getDataRequested());

  let query = random ? '/random' : '';
  let url = 'https://api.punkapi.com/v2/beers'+query;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // set state for success
      dispatch(getDataDone(data));
    })
    .catch(error => {
      // set state for error
      dispatch(getDataFailed(error));
    })
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
