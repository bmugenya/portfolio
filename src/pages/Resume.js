import { Grid, Icon, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../components/Timeline'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import data from '../utils/data'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineItem from '@material-ui/lab/TimelineItem'
import SchoolIcon from '@material-ui/icons/School'
import TimelineDot from '@material-ui/lab/TimelineDot'
import CustomButton from '../components/Button'
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
          <h6 className='section_text'>Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
            <Grid item sm={12} md={6}>
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
            {/* Education */}
            <Grid item sm={12} md={6}>
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
      {/* Service */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h5 className='section_title'>My services</h5>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify='space-around'>
            {data.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className='service'>
                  <Icon className='service_icon'>{service.icon}</Icon>
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
      <Grid container className='section graybg pb_45  p_50'>
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
      {/* Contact */}
      <Grid container spacing={6} className='section pt_45 pb_45'>
        {/* Contact form */}
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className='section_title mb_30'>
              <span> </span>
              <h6 className='section_title'>Contact Form</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='name' label='Name' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='email' label='Email' />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name='message'
                    label='Message'
                    multiline
                    rows={4}
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomButton text='Submit' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Contact info */}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className='section_title mb_30'>
              <span> </span>
              <h6 className='section_title'>Contact Information</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography className='contact_info'>
                    <span>Address:</span>
                    {data.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='contact_info'>
                    <span>Phone:</span>
                    {data.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='contact_info'>
                    <span>Email:</span>
                    {data.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container className='contact_box'>
                {Object.keys(data.socials).map((key) => (
                  <Grid container className='contact_social'>
                    <a href={data.socials[key].link}>
                      {data.socials[key].icon}
                    </a>
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
