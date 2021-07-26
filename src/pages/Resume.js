import { Grid, Icon, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../components/Timeline'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import data from '../utils/data'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineItem from '@material-ui/lab/TimelineItem'
import SchoolIcon from '@material-ui/icons/School'
import TimelineDot from '@material-ui/lab/TimelineDot'
import Portfolio from './Portfolio'
import '../assets/css/Resume.css'
const Resume = () => {
  return (
    <>
      {/* About me */}
      <Grid container className='section pb_45 pt_45'>
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
      {/* certification */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_text'>Portfolio</h6>
        </Grid>

        <Grid item xs={12}>
          <Portfolio />
        </Grid>
      </Grid>
      {/* Service */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h5 className='section_title'>Talents</h5>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify='space-around'>
            {data.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className='service'>
                  <figure className='service_icon'>
                    <img src={service.icon} alt='profile' />
                  </figure>
                  <Typography variant='h6' className='service_title'>
                    {service.title}
                  </Typography>
                  <Typography variant='body2' className='service_description'>
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Skills */}

      <Grid container className='section pb_45  p_50'>
        <span></span>
        <h5 className='section_title'>Stacks</h5>
        <Grid item xs={12}>
          <Grid container justify='space-between' spacing={3}>
            {data.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className='skill'>
                  <Typography variant='h6' className='skill_title'>
                    {skill.title}
                  </Typography>

                  {skill.description.map((element) => (
                    <Typography variant='body2' className='skill_description'>
                      <TimelineDot
                        variant={'outlined'}
                        className='timeline_dot'
                      />
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
