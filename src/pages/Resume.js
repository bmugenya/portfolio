import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import '../assets/css/Resume.css'
import data from '../utils/data'
const Resume = () => {
  return (
    <>
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_text'>About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' className='about_text'>
            {data.about}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='section'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_text'>Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Resume
