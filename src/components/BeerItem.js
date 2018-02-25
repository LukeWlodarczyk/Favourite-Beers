import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { bindActionCreators } from 'redux';
// import { deleteUser } from "../actions/index";
// import { updateUser } from "../actions/index";

// const mapDispatchToProps = dispatch => bindActionCreators({ deleteUser, updateUser }, dispatch);

const BeerItem = (props) => {



  return (
      <li>{props.beer.name}</li>
  )
}

// const User = connect(null, { deleteUser, updateUser })(ListItem);
//
// ListItem.propTypes = {
//   deleteUser: PropTypes.func.isRequired,
//   updateUser: PropTypes.func.isRequired
// };

export default BeerItem
