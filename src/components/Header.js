import React from 'react'
import data from '../utils/data'
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'
import TelegramIcon from '@material-ui/icons/Telegram'
import { HomeRounded } from '@material-ui/icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, NavLink, withRouter } from 'react-router-dom'
import '../assets/css/Header.css'
import CustomButton from './Button'
const Header = (props) => {
  const pathName = props?.location?.pathname
  return (
    <Navbar expand='lg' sticky='top' className='header'>
      <Nav.Link as={NavLink} to='/' className='header_navlink'>
        <Navbar.Brand className='header_name'>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='header_left'>
          <Nav.Link
            as={NavLink}
            to='/'
            className={pathName == '/' ? 'header_link_active' : 'header_link'}
          >
            Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/portfolio'
            className={
              pathName == '/portfolio' ? 'header_link_active' : 'header_link'
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className='header_right'>
          {Object.keys(data.socials).map((key) => (
            <a href={data.socials[key].link} target='_blank'>
              {data.socials[key].icon}
            </a>
          ))}
          <CustomButton text={'Hire Me'} icon={<TelegramIcon />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Header)
