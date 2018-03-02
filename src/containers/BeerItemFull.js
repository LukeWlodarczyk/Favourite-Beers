import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSingleBeer } from '../actions/index';


const mapStateToProps = state => {
  return {
    beer: state.singleBeer.beer,
    isError: state.singleBeer.isError,
    isLoading: state.singleBeer.isLoading,
   };
};

class BeerItemFull extends Component {

  componentDidMount() {
    const { getSingleBeer } = this.props;
    let id = this.props.match.params.id
    getSingleBeer(id);
  }

  render() {
    const { beer, isError, isLoading } = this.props;

    if(isError) {
      return <p>Error!</p>
    }

    if(isLoading) {
      return <p>Loading...</p>
    }


// style={{transition: '.5s', opacity: isLoading ? .5 : 1 }}
    return (
      <div>
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <p>{beer.description}</p>
        <p>{beer.brewers_tips}</p>
        <p>Pairing food:</p>
        <ul>
          {beer.food_pairing.map( f => <li>{f}</li>)}
        </ul>
        <img src={beer.image_url} />
        <small>{beer.contributed_by}</small>
      </div>
    )
  }
}

const BeerItem = connect(mapStateToProps, { getSingleBeer })(BeerItemFull);

BeerItemFull.propTypes = {
  beer: PropTypes.object.isRequired,
  isError: PropTypes.bool,
  isLoading: PropTypes.bool
};

export default BeerItem
