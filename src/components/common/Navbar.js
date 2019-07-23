import React from 'react'

import { Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = () => {
  return (
    <Menu className="nav">
      <Link to="/" id="logo">
        <img src='../../assets/logo-files/svg/color-no-bg.svg' />
      </Link>
      <Link to="/contact">
        <Menu.Item content="CONTACT" />
      </Link>
      <Link to="/about">
        <Menu.Item content="ABOUT" />
      </Link>
      <Link to="jobs">
        <Menu.Item content="JOBS" />
      </Link>
      <Link to="hiring">
        <Menu.Item content="HIRING" />
      </Link>
      <Link to="profile">
        <Menu.Item content="PROFILE" />
      </Link>
    </Menu>
  )
}

export default withRouter(Navbar)
