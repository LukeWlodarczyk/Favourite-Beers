import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BeerItem from '../components/BeerItem';
import { getBeers } from '../actions/index';


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
      num: 20
    }
  }
  componentDidMount() {
    const { getBeers } = this.props;
    getBeers();
  }


  loadMore = () => {
    this.setState({
      num: this.state.num+20
    })
  }

  render() {
    const { beerList, isError, isLoading } = this.props;

    if(isError) {
      return <p>Error!</p>
    }

    if(isLoading) {
      return <p>Loading...</p>
    }
// style={{transition: '.5s', opacity: isLoading ? .5 : 1 }}
    return (
      <div>
        <ul className='beer-list'>
          {beerList.slice(0, this.state.num).map( beer => (
            <li key={beer.id}>
              <BeerItem
                beer={beer}
              />
            </li>
          ))}
        </ul>
        {(this.state.num < beerList.length) && <button className='btn-more' onClick={this.loadMore} >More</button>}
      </div>
    )
  }
}

const Beers = connect(mapStateToProps, { getBeers })(BeerList);

BeerList.propTypes = {
  beerList: PropTypes.array.isRequired,
  isError: PropTypes.bool,
  isLoading: PropTypes.bool
};

export default Beers
