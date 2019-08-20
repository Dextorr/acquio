import React from 'react'

import { Menu, Container } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

import Auth from '../../lib/Auth'

const Navbar = () => {
  return (
    <Menu className="nav">
      <Container fluid>

        <Link to="/" id="logo">
          <img src='../../assets/logo-files/svg/color-no-bg.svg' />
        </Link>

        <Link to="/about">
          <Menu.Item content="ABOUT" />
        </Link>

        <Link to="/jobs">
          <Menu.Item content="JOBS" />
        </Link>

        <Link to="/hiring">
          <Menu.Item content="HIRING" />
        </Link>

        {Auth.isAuthenticated() ?
          <Link to="/profile">
            <Menu.Item content="PROFILE" />
          </Link>
          :
          <Link to="/login">
            <Menu.Item content="LOGIN" />
          </Link>
        }

      </Container>
    </Menu>
  )
}

export default withRouter(Navbar)
