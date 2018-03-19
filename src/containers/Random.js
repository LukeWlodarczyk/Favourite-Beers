import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BeerItem from '../components/BeerItem';
import { getSingleBeer } from '../actions/index';
import Spinner from '../components/Spinner';
import ErrorInfo from '../components/ErrorInfo';

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
    let random = Math.random()*3
    this.setState({
      isShuffling: true,
    })
    setTimeout( () => {
      this.setState({
        isShuffling: false,
      });
      getSingleBeer('random');
    }, random*1000)
  }

  render() {

    const { beer, isError, isLoading } = this.props;

    if(isError) {
      return <ErrorInfo />
    }

    if(isLoading || this.state.isShuffling) {
      return <Spinner />
    }

    return (
      <div className='random-container'>
        <BeerItem beer={beer} />
        <button className='btn-random' onClick={this.getRandomBeer}>Get random Beer</button>
      </div>
    )
  }
}

const RandomBeer = connect(mapStateToProps, { getSingleBeer })(RandomBeerItem);

RandomBeerItem.propTypes = {
  beer: PropTypes.object.isRequired,
  isError: PropTypes.bool,
  isLoading: PropTypes.bool
};

export default RandomBeer;
