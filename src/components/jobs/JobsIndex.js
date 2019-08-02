import React from 'react'
import axios from 'axios'

import { Container, Grid, Card } from 'semantic-ui-react'
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

          <Grid stackable columns={4}>
            {this.state.jobs.map((job, i) =>

              <Grid.Column key={i}>
                <JobsCard job={job} />
              </Grid.Column>

            )}
          </Grid>

        </Container>
      </main>
    )
  }
}

export default JobsIndex
