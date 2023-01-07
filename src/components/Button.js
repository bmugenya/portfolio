import React from 'react'
import { Button } from '@material-ui/core'
import '../assets/css/Button.css'
const CustomButton = ({ text, icon,href }) => {
  return (
    <Button
      className='custom_btn'
      href={href}
      endIcon={icon ? <div className='btn_icon'>{icon}</div> : null}
    >
      
      <span className='btn_text'>{text} </span>
    </Button>
  )
}

export default CustomButton
