import React from 'react'
import axios from 'axios'
import Promise from 'bluebird'

import { Container, Grid, Segment, Button } from 'semantic-ui-react'

import Auth from '../../lib/Auth'

class JobsShow extends React.Component {
  constructor(){
    super()

    this.apply = this.apply.bind(this)
    this.quickApply = this.quickApply.bind(this)
  }

  componentDidMount(){
    Promise.props({
      job: axios.get(`/api/jobs/${this.props.match.params.id}`)
        .then(res => res.data)
        .catch(err => err.jobError),
      user: axios.get('/api/profile', {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
        .then(res => res.data)
        .catch(err => err.userError)
    })
      .then(data => {
        if(Auth.isAuthenticated()){
          const { job, user } = data
          this.setState({
            job,
            user,
            errors: {
              job: data.jobError,
              user: data.userError
            }
          })
        } else {
          const { job } = data
          this.setState({
            job,
            errors: data.jobError
          })
        }
      })
  }

  apply(){
    axios.put(`/api/jobs/${this.state.job._id}`)
      .then(() => this.setState({ message: `Thanks for applying for the ${this.state.job.name} role!` }))
      .catch(err => this.setState({ error: err.response.data }))
  }

  quickApply(){
    this.props.history.push(`/quickapply/${this.state.job._id}`)
  }

  render(){
    if (!this.state) return null
    const { job, user } = this.state
    let applied = null
    if (this.state.user) applied = user.jobs.some(userJob => userJob._id === job._id)
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
            <Button
              onClick={this.apply}
              disabled={applied}
            >{applied ? 'You\'ve applied for this job':'Apply'}</Button>
            :
            <Button onClick={this.quickApply}>Quick Apply</Button>
          }

        </Container>
      </main>
    )
  }
}

export default JobsShow
