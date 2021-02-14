import React from 'react'
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, NavLink, withRouter } from 'react-router-dom'
const Header = () => {
  return (
    <Navbar expand='lg' sticky='top' className='header'>
      <Nav.Link as={NavLink} to='/'>
        <Navbar.Brand className='header_home'>
          {/* <HomeRounded /> */}
        </Navbar.Brand>
      </Nav.Link>
    </Navbar>
  )
}

export default Header
