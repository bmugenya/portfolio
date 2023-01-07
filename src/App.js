import { Container, Grid } from '@material-ui/core'
import './App.css'
import Header from './components/Header'
import Profile from './components/Profile'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Footer from './components/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Container className={'top_60'}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          
            <Router>
            <Header />
            <div className='main_content container_shadow'>
              <Routes>
                <Route exact path='/' element={<Resume />} />
                <Route exact path='/portfolio' element={<Portfolio />} />
              </Routes>
              </div>
            </Router>
         
          <Footer />
        </Grid>
      </Grid>
    </Container>
  )
}
export default App
