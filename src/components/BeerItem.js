import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const BeerItem = ({ beer }) => {

  return (
    <Link to={`/${beer.id}`}>
      <h1>{beer.name}</h1>
      <p>{beer.tagline}</p>
      <p>{beer.description}</p>
      <p>{beer.brewers_tips}</p>
      <img src={beer.image_url} />
    </Link>
  )
}

BeerItem.propTypes = {
  beer: PropTypes.object.isRequired,
};

export default BeerItem;
