import React from 'react'
import axios from 'axios'

import { Container, Grid } from 'semantic-ui-react'

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
          <Grid stackable>

            <Grid.Column tablet={16} computer={8}>
              <h2>{job.name}</h2>
              <p>{job.description}</p>
            </Grid.Column>

            <Grid.Column tablet={16} computer={6}>
              <Grid stackable className="sectors">
                {job.sectors.map(sector =>
                  <Grid.Column key={sector._id} computer={6}>
                    {sector.name}
                  </Grid.Column>
                )}
              </Grid>
            </Grid.Column>

          </Grid>
        </Container>
      </main>
    )
  }
}

export default JobsShow
