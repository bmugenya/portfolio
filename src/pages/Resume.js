import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import data from '../utils/data'

import '../assets/css/Resume.css'
const Resume = () => {
  return (
    <>
      {/* About me */}
      <Grid container className='section pb_45 pt_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_text'>About Me 👋</h6>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='body2' className='about_text'>
            {data.about}
          </Typography>
        </Grid>
      </Grid>
      {/* certification */}
      <Grid container className='section pb_45'>
      <Grid item className='section_title mb_30'>
        <span></span>
        <h6 className='section_text'>My Skills</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {data.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={6}>
                <Paper elevation={0} className='skill'>
                  <Typography variant='h6' className='skill_title'>
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography variant='body2' className='skill_description'>
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>


    </>
  )
}

export default Resume
