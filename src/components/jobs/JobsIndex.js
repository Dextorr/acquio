import React from 'react'
import axios from 'axios'

import { Container, Grid, Segment, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import JobsCard from './JobsCard'

class JobsIndex extends React.Component{
  constructor(){
    super()

    this.state = {
      search: ''
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch({ target: { value } }){
    const search = value
    this.setState({ search })
  }

  filterJobs(){
    if (this.state.search !== '') return this.state.jobs.filter(job => {
      const search = this.state.search.toLowerCase()
      return job.name.toLowerCase().includes(search) ||
        job.sectors.some(sector => sector.name.toLowerCase().includes(search))
    })
    return this.state.jobs
  }

  componentDidMount(){
    axios.get('/api/jobs')
      .then(res => {
        const jobs = res.data
          .filter(job => job.active)
          .sort((a, b) => {
            const aDate = new Date(a.createdAt)
            const bDate = new Date(b.createdAt)
            return bDate - aDate
          })
        this.setState({ jobs })
      })
      .catch(err => console.error(err))
  }

  render(){
    if (!this.state.jobs) return null
    return (
      <main className="jobs">
        <Container>

          <Segment>
            <Input
              fluid
              label="Search"
              placeholder="Search our active roles..."
              name="search"
              value={this.state.search}
              onChange={this.handleSearch}
            />
          </Segment>

          <Grid stackable>
            {this.filterJobs().map((job, i) =>

              <Grid.Column mobile={16} tablet={8} computer={4} key={i}>
                <Link to={`/jobs/${job._id}`}>
                  <JobsCard job={job} />
                </Link>
              </Grid.Column>

            )}
          </Grid>

        </Container>
      </main>
    )
  }
}

export default JobsIndex
