import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BeerItem from './BeerItem';
import { getBeers } from '../actions/index'


const mapStateToProps = state => {
  return { beerList: state.beers.beers };
};

// const mapStateToProps = ( {users} ) => ( { users } );

class BeerList extends Component {

  componentDidMount() {
    const { getBeers } = this.props;
    getBeers(false);
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
      <p>Users</p>
        {this.props.beerList.map( beer => (
          <BeerItem
            className="list-group-item"
            key={beer.id} beer={beer}
          />
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
