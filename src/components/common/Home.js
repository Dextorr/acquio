import React from 'react'
import axios from 'axios'

import Hero from './Hero'
import About from './About'
import RecentJobs from '../jobs/RecentJobs'

class Home extends React.Component {

  componentDidMount(){
    axios.get('/api/jobs')
      .then(res => {
        const jobs = res.data.filter((job, i) => i < 4)
        this.setState({ jobs })
      })
      .catch(err => console.error(err))
  }

  render(){
    if(!this.state) return null
    return(
      <main className="home">
        <Hero />
        <About />
        <RecentJobs jobs={this.state.jobs} />
      </main>
    )
  }
}

export default Home
