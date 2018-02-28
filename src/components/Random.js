import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import BeerItem from './BeerItem';
import { getBeers } from '../actions/index'

const mapStateToProps = state => {
  return { beerList: state.beers.beers };
};

class RandomBeer extends Component {

  componentDidMount() {
    const { getBeers } = this.props;
    getBeers();
  }

  render() {
    return (
      <div>
        {this.props.beerList.map( beer => (
          <BeerItem
            className="list-group-item"
            key={beer.id} beer={beer}
          />
        ))}
      </div>
    )
  }
}

const RandomBeer1 = connect(mapStateToProps, { getBeers })(RandomBeer);

// ConnectedForm.propTypes = {
//   addUser: PropTypes.func.isRequired
// };

export default RandomBeer1;
