import axios from 'axios';
import {  GET_BEERS_REQUESTED,
          GET_BEERS_INIT_DONE,
          GET_BEERS_MORE_DONE,
          GET_BEERS_FAILED,
          GET_BEER_REQUESTED,
          GET_BEER_DONE,
          GET_BEER_FAILED } from '../constants/action-types';




const getBeersRequested = () => {
  return {
    type: GET_BEERS_REQUESTED
  };
}

const getBeersInitialDone = data => {
  return {
    type: GET_BEERS_INIT_DONE,
    payload: data
  };
}

const getBeersMoreDone = data => {
  return {
    type: GET_BEERS_MORE_DONE,
    payload: data
  };
}

const getBeersFailed = () => {
  return {
    type: GET_BEERS_FAILED
  };
}

export const getBeers = (page) => dispatch => {

  dispatch(getBeersRequested());

  axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=20`)
    .then(res => res.data)
    .then(data => {
      page === 1
        ? dispatch(getBeersInitialDone(data))
        : dispatch(getBeersMoreDone(data));
    })
    .catch(error => {
      dispatch(getBeersFailed(error));
    })
}




const getBeerRequested = () => {
  return {
    type: GET_BEER_REQUESTED
  };
}

const getBeerDone = beer => {
  return {
    type: GET_BEER_DONE,
    payload: beer
  };
}

const getBeerFailed = () => {
  return {
    type: GET_BEER_FAILED
  };
}

export const getSingleBeer = id => dispatch => {

  dispatch(getBeerRequested());

  let url = 'https://api.punkapi.com/v2/beers/'+id;

  axios.get(url)
    .then(res => res.data)
    .then(data => {
      dispatch(getBeerDone(data[0]));
    })
    .catch(error => {
      dispatch(getBeerFailed(error));
    })
}
