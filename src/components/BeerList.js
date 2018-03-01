import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BeerItem from './BeerItem';
import { getBeers } from '../actions/index';
import { Link } from 'react-router-dom';


const mapStateToProps = state => {
  return {
    beerList: state.beers.beers,
    isError: state.beers.isError,
    isLoading: state.beers.isLoading,
    error: state.beers.error,
   };
};

class BeerList extends Component {

  componentDidMount() {
    const { getBeers } = this.props;
    getBeers();
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
      <ul className="list-group list-group-flush">
      <p>Users</p>
        {beerList.map( beer => (
          <li key={beer.id}>
            <Link to={`/${beer.id}`}>
              <BeerItem
                className="list-group-item"
                beer={beer}
              />
            </Link>
          </li>
        ))}
      </ul>
    )
  }
}

const Beers = connect(mapStateToProps, { getBeers })(BeerList);
// const List = connect(state => ({ users: state.users }))(ConnectedList);
// const List = connect( ( {users} ) => ( { users } ) )(ConnectedList);

BeerList.propTypes = {
  beerList: PropTypes.array.isRequired
};

export default Beers
