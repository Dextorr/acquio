import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import JobsIndex from './components/jobs/JobsIndex'
import JobsShow from './components/jobs/JobsShow'

import 'semantic-ui-css/semantic.min.css'
import './style.scss'

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/jobs/:id' component={JobsShow} />
          <Route path='/jobs' component={JobsIndex} />
          <Route path='' component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
