import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const BeerItem = ({ beer }) => {

  return (
    <Link to={`/${beer.id}`}>
      <p>{beer.name}</p>
    </Link>
  )
}

BeerItem.propTypes = {
  beer: PropTypes.object.isRequired,
};

export default BeerItem
