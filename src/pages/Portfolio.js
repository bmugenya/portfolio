import {
  Grid,
  Typography,
  Tabs,
  Tab,
  Grow,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CardActionArea,
} from '@material-ui/core'
import React, { useState } from 'react'
import '../assets/css/Profile.css'
import data from '../utils/data'
const Portfolio = () => {
  const [tabValue, setTabValue] = useState('All')
  const [projectDialog, setProjectDialog] = useState(false)
  return (
    <Grid container spacing={1} className='section pb_45 pt_45'>
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
        <Grid container spacing={2}>
          {data.projects.map((project) => (
            <>
              {tabValue == project.tag || tabValue == 'All' ? (
                <Grid item xs={12} sm={6} md={4}>
                  <Grow in timeout={1000}>
                    <Card
                      className='custom_card'
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        {/* <CardMedia
                         
                          src={project.image}
                          title={project.title}
                        /> */}
                        <CardMedia className='card_img'>
                          <video
                            width='320'
                            height='240'
                            autoPlay
                            muted
                            controls
                          >
                            <source src={project.image} />
                          </video>
                        </CardMedia>
                        <CardContent>
                          <Typography variant='body2' className='card_title'>
                            {project.title}
                          </Typography>
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

      <Dialog
        open={projectDialog}
        onClose={() => setProjectDialog(false)}
        className='dialog'
      >
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <CardMedia className='dialog_img'>
          <video width='100%' height='240' autoPlay muted controls>
            <source src={projectDialog.image} />
          </video>
        </CardMedia>{' '}
        <DialogContent>
          <Typography className='dialog_des'>
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className='dialog_actions'>
          {projectDialog?.links?.map((link) => (
            <a href={link.link} target='_blank' className='dialog_icon'>
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  )
}

export default Portfolio
