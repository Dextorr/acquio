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
import UserShow from './components/users/UserShow'
import CompaniesNew from './components/companies/CompaniesNew'

import 'semantic-ui-css/semantic.min.css'
import './style.scss'

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/hiring' component={CompaniesNew} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={UserShow} />
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
