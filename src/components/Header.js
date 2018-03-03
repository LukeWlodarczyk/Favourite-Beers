import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <Link className='logo link' to="/">Beer</Link>
      <nav>
        <ul className='nav' >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/random">Random</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
