import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import JobsIndex from './components/jobs/JobsIndex'
import JobsShow from './components/jobs/JobsShow'
import Footer from './components/common/Footer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

import 'semantic-ui-css/semantic.min.css'
import './style.scss'

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/jobs/:id' component={JobsShow} />
          <Route path='/jobs' component={JobsIndex} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
