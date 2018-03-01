import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import BeerItem from './BeerItem';
import { getSingleBeer } from '../actions/index';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    beer: state.singleBeer.beer,
    isLoading: state.singleBeer.isLoading,
    isError:state.singleBeer.isError
  };
};

class RandomBeerItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShuffling: false,
    }
  }

  componentDidMount() {
    const { getSingleBeer } = this.props;
    getSingleBeer('random');
  }

  getRandomBeer = () => {
    const { getSingleBeer } = this.props;
    this.setState({
      isShuffling: true,
    })
    setTimeout( () => {
      this.setState({
        isShuffling: false,
      })
      getSingleBeer('random');
    },1000)
  }

  render() {

    const { beer, isError, isLoading } = this.props;
    console.log(this.props);

    if(isError) {
      return <p>Error!</p>
    }

    if(isLoading || this.state.isShuffling) {
      return <p>Loading...</p>
    }

    return (
      <div>
        <Link to={`/${beer.id}`}>
          <BeerItem beer={beer} />
        </Link>
        <button onClick={this.getRandomBeer}>Get random Beer</button>
      </div>
    )
  }
}

const RandomBeer = connect(mapStateToProps, { getSingleBeer })(RandomBeerItem);

export default RandomBeer;
