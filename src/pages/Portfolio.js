import {
  Grid,
  Typography,
  Tabs,
  Tab,
  Grow,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@material-ui/core'
import React, { useState } from 'react'
import '../assets/css/Profile.css'
import data from '../utils/data'
const Portfolio = () => {
  const [tabValue, setTabValue] = useState('All')
  return (
    <Grid container className='section pb_45 pt_45'>
      {/* Title */}
      <Grid item className='section title mb_30'>
        <span></span>
        <h6 className='section_title'>Portfolio</h6>
      </Grid>
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor='white'
          className='custom_tabs'
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label='All'
            value='All'
            className={tabValue == 'All' ? 'custom_tabs active' : 'custom_tab'}
          />
          {[...new Set(data.projects.map((item) => item.tag))].map((tag) => (
            <Tab
              label={tag}
              value={tag}
              className={tabValue == 'All' ? 'custom_active' : 'custom_tabs'}
            />
          ))}
        </Tabs>
      </Grid>
      {/* Projects */}
      <Grid item xs={12}>
        <Grid conatiner spacing={2}>
          {data.projects.map((project) => (
            <>
              {tabValue == project.tag || tabValue == 'All' ? (
                <Grid item>
                  <Grow in timeout={1000}>
                    <Card>
                      <CardActionArea>
                        <CardMedia />
                        <CardContent>
                          <Typography>{project.title}</Typography>
                          <Typography>{project.description}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Portfolio
