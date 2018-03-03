import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/random">Random Beer</Link>
      </li>
    </ul>
  )
}

export default Header
