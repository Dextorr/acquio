import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/common/Navbar'

import './style.scss'

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
