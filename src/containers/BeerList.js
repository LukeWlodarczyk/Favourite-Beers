import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BeerItem from '../components/BeerItem';
import { getBeers } from '../actions/index';
import Spinner from '../components/Spinner';

const mapStateToProps = state => {
  return {
    beerList: state.beers.beers,
    isError: state.beers.isError,
    isLoading: state.beers.isLoading,
   };
};

class BeerList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
    const { getBeers } = this.props;
    getBeers(1);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }

  onScroll = () => (
    ( window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)
      && !this.props.isLoading
      && !this.props.isError
      && this.state.page < 13
    )
      && this.loadMore();


  loadMore = () => {
    const { getBeers } = this.props;
    this.setState({
      page: this.state.page + 1
    })
    getBeers(this.state.page);
  }

  render() {
    const { beerList, isError, isLoading } = this.props;

    return (
      <div>
        <ul className='beer-list'>
          {beerList.map( beer => (
            <li key={beer.id}>
              <BeerItem
                beer={beer}
              />
            </li>
          ))}
        </ul>
        {isLoading && <Spinner /> }
        {(isError) &&
          <button className='btn-more' onClick={this.loadMore}>Ooops! Try again</button>
        }
      </div>
    )
  }
}

const Beers = connect(mapStateToProps, { getBeers })(BeerList);

BeerList.propTypes = {
  beerList: PropTypes.array.isRequired,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  getBeers: PropTypes.func.isRequired
};

export default Beers
