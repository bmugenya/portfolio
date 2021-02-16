import { Grid, Icon, Paper, Typography } from '@material-ui/core'
import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../components/Timeline'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import data from '../utils/data'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineItem from '@material-ui/lab/TimelineItem'
import SchoolIcon from '@material-ui/icons/School'
import TimelineDot from '@material-ui/lab/TimelineDot'
const Resume = () => {
  return (
    <>
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
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_text'>Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
            <Grid item xs={12} md={6}>
              <CustomTimeline
                title='Certifications'
                icon={<VerifiedUserIcon />}
              >
                {data.certifications.map((certification) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent class_name='timeline_content'>
                      <Typography className='timeline_title'>
                        {certification.title}
                      </Typography>
                      <Typography variant='captain' className='timeline_date'>
                        {certification.date}
                      </Typography>
                      <Typography
                        variant='body2'
                        className='timeline_description'
                      >
                        {certification.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            <Grid item xs={12} md={6}>
              <CustomTimeline title='Education' icon={<SchoolIcon />}>
                {data.education.map((school) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent class_name='timeline_content'>
                      <Typography className='timeline_title'>
                        {school.title}
                      </Typography>
                      <Typography variant='captain' className='timeline_date'>
                        {school.date}
                      </Typography>
                      <Typography
                        variant='body2'
                        className='timeline_description'
                      >
                        {school.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h5 className='section_title'>My services</h5>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify={'space-around'}>
            {data.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className='service'>
                  <Icon className='service_icon'>{service.icon}</Icon>
                  <Typography variant='h6' className='service_title'>
                    {service.title}
                  </Typography>
                  <Typography variant='body' className='service_description'>
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>

          <Grid container className='section graybg pt_45  p_50'>
            <Grid item xs={12}>
              <Grid container justify='space-between' spacing={3}>
                {data.skills.map((skill) => (
                  <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={0} class Name='skill'>
                      <Typography variant='h6' className='skill_title'>
                        {skill.title}
                      </Typography>

                      {skill.description.map((element) => (
                        <Typography
                          variant='body2'
                          className='skill_description'
                        >
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
        </Grid>
      </Grid>
    </>
  )
}

export default Resume
