import React from 'react'
import axios from 'axios'
import Promise from 'bluebird'

import Auth from '../../lib/Auth'

import { Container, Header, Segment, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import JobsCard from '../jobs/JobsCard'
import RecentJobs from '../jobs/RecentJobs'

class UserShow extends React.Component{
  constructor(){
    super()

    this.state = {
      errors: null
    }
  }

  componentDidMount(){
    let path

    if (this.props.location.pathname === '/profile'){
      path = '/api/profile'
    } else {
      path = '/api/users/${this.props.match.params.id}'
    }

    Promise.props({

      user: axios.get(path,
        { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
        .then(res => res.data)
        .catch(err => this.setState({ errors: err.response.data })),

      jobsIndex: axios.get('/api/jobs')
        .then(res => res.data)
        .catch(err => this.setState({ errors: err.response.data }))

    }).then(data => {

      const { user, jobsIndex } = data
      const progress = Math.round(100 * ( (Object.keys(user).length - 5)/9 ))
      const jobs = jobsIndex.sort((a, b) => {
        const aDate = new Date(a.createdAt)
        const bDate = new Date(b.createdAt)
        return bDate - aDate
      }).filter((job, i) => job.active && i < 4)

      this.setState({ user, progress, jobs })

    })
  }

  render(){
    if (!this.state.jobs) return null
    const {
      _id,
      fName,
      lName,
      email,
      phone,
      location,
      statement,
      portfolio,
      github,
      linkedIn,
      jobs
    } = this.state.user
    return(
      <main className="profile">
        <Container>
          <Header as="h2">{`${this.state.user.fName}'s Profile`}</Header>

          <progress value={this.state.progress} max={100}></progress>
          <p>
            Profile is {this.state.progress}% complete
          </p>
          <Link to={`/users/${_id}/edit`} >Edit profile</Link>

          <Segment className="personal-details">
            <Header as="h3">Personal Details</Header>
            <p>
              <span>Name: </span>
              {fName} {lName}
            </p>
            <p>
              <span>Email Address: </span>
              {email}
            </p>
            <p>
              <span>Phone Number: </span>
              {phone || ''}
            </p>
            <p>
              <span>Location: </span>
              {location}
            </p>
          </Segment>

          <Segment>
            <Header as="h3">Application presets</Header>
            <p>
              <span>Personal Statement: </span>
              {statement || ''}
            </p>
            <Header as="h4">Links:</Header>
            <p>
              <span>Portfolio/Website: </span>
              {portfolio || ''}
            </p>
            <p>
              <span>GitHub: </span>
              {github || ''}
            </p>
            <p>
              <span>LinkedIn: </span>
              {linkedIn || ''}
            </p>
          </Segment>

          <Segment>
            <section className="jobs-applied" >
              <Header as="h3">{'Job applications'}</Header>
              <Grid stackable>
                {jobs.length > 0 ?
                  jobs.map(job =>
                    <Grid.Column key={job._id} computer={4} >
                      <Link to={`/jobs/${job._id}`}>
                        <JobsCard job={job} />
                      </Link>
                    </Grid.Column>
                  )
                  :
                  <Header as="h4">{'No jobs applied for yet...'}</Header>
                }
              </Grid>
            </section>
          </Segment>


          <Segment>
            <RecentJobs jobs={this.state.jobs} />
          </Segment>

        </Container>
      </main>
    )
  }
}

export default UserShow
