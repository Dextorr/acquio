import React from 'react'
import axios from 'axios'

import { Container, Grid, Segment, Button } from 'semantic-ui-react'

import Auth from '../../lib/Auth'

class JobsShow extends React.Component {

  componentDidMount(){
    axios.get(`/api/jobs/${this.props.match.params.id}`)
      .then(res => this.setState({ job: res.data }))
      .catch(err => console.error(err))
  }

  render(){
    if (!this.state) return null
    const { job } = this.state
    return (
      <main className="job">
        <Container>
          <Segment>
            <h2>{job.name}</h2>
            <p>{job.description}</p>
          </Segment>

          <Segment>
            <Grid stackable className="sectors">
              {job.sectors.map(sector =>
                <Grid.Column key={sector._id} computer={6}>
                  {sector.name}
                </Grid.Column>
              )}
            </Grid>
          </Segment>

          {Auth.isAuthenticated() ?
            <Button>Apply</Button>
            :
            <Button>Quick Apply</Button>
          }

        </Container>
      </main>
    )
  }
}

export default JobsShow
