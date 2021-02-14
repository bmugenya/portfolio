import { Container, Grid } from '@material-ui/core'
import './App.css'
import Header from './components/Header'
import Profile from './components/Profile'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Footer from './components/Footer'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Header />
          <Router>
            <Switch>
              <Route path='/portfolio'>
                <Portfolio />
              </Route>
              <Route path='/'>
                <Resume />
              </Route>
            </Switch>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  )
}
export default App
