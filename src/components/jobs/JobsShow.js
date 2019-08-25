import React from 'react'
import axios from 'axios'

import { Container, Grid, Segment, Button } from 'semantic-ui-react'

import Auth from '../../lib/Auth'

class JobsShow extends React.Component {
  constructor(){
    super()

    this.apply = this.apply.bind(this)
    this.quickApply = this.quickApply.bind(this)
  }

  componentDidMount(){
    axios.get(`/api/jobs/${this.props.match.params.id}`)
      .then(res => this.setState({ job: res.data }))
      .catch(err => console.error(err))
  }

  apply(){
    axios.put(`/api/jobs/${this.state.job._id}`)
      .then(() => this.setState({ message: `Thanks for applying for the ${this.state.job.name} role!` }))
      .catch(err => this.setState({ error: err.response.data }))
  }

  quickApply(){
    this.props.history.push(`/quickApply/${this.state.job._id}`)
  }

  render(){
    if (!this.state) return null
    const { job } = this.state
    return (
      <main className="job">
        <Container>
          <Segment>
            <Grid stackable>

              <Grid.Column computer={10}>
                <h2>{job.name}</h2>
                <p>{job.description}</p>
              </Grid.Column>

              <Grid.Column computer={6}>

                <Grid stackable className="sectors">
                  {job.sectors.map(sector =>
                    <Grid.Column key={sector._id} computer={8}>
                      <span>{sector.name}</span>
                    </Grid.Column>
                  )}
                </Grid>

              </Grid.Column>

            </Grid>
          </Segment>

          {Auth.isAuthenticated() ?
            <Button onClick={this.apply}>Apply</Button>
            :
            <Button onClick={this.quickApply}>Quick Apply</Button>
          }

        </Container>
      </main>
    )
  }
}

export default JobsShow
