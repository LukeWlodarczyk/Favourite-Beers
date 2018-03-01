import React from "react";
import PropTypes from "prop-types";

const BeerItem = (props) => {

  return (
      <p>{props.beer.name}</p>
  )
}

BeerItem.propTypes = {
  beer: PropTypes.object.isRequired,
};

export default BeerItem
