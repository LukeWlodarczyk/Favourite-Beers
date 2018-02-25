import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";

// const mapDispatchToProps = dispatch => {
//   return {
//     addUser: user => dispatch(addUser(user))
//   };
// };

// const mapDispatchToProps = dispatch => bindActionCreators({ addUser: addUser }, dispatch);

// const mapDispatchToProps = dispatch => bindActionCreators( { addUser }, dispatch);



class RandomBeer extends Component {

  componentDidMount() {
    const { getBeers } = this.props;
    getBeers(true);
  }

  render() {
    return
  }
}

const RandomBeer1 = connect()(RandomBeer);

// ConnectedForm.propTypes = {
//   addUser: PropTypes.func.isRequired
// };

export default RandomBeer1;
