import React from 'react'
import '../assets/css/Footer.css'
import data from '../utils/data'
import { Typography } from '@material-ui/core'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <Typography className='footer_name'>{data.name}</Typography>
      </div>
      <div className='footer_right'>
        <Typography className='footer_copyright'>
          Developed |
          <a href='/' target='_blank'>
            Brian Mugenya
          </a>
          <br />
          Designed |
          <a href='https://themeforest.net/user/tavonline'>Travonline</a>
        </Typography>
      </div>
    </div>
  )
}

export default Footer
