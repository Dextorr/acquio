import React from 'react'
import axios from 'axios'

import { Container, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import JobsCard from './JobsCard'

class JobsIndex extends React.Component{

  componentDidMount(){
    axios.get('/api/jobs')
      .then(res => this.setState({ jobs: res.data }))
      .catch(err => console.error(err))
  }

  render(){
    if (!this.state) return null
    return (
      <main className="jobs">
        <Container>

          <Grid stackable>
            {this.state.jobs.map((job, i) =>

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
