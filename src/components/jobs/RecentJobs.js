import React from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import JobsCard from './JobsCard'

const RecentJobs = ({ jobs }) => {
  return (
    <section className="recent-jobs">
      <div className="recent-jobs-overlay">
        <Header as="h2">
          <Container>
            Most Recent Jobs
          </Container>
        </Header>
        <Container>
          <Grid>

            {jobs.map((job, i) =>
              <Grid.Column mobile={16} tablet={8} computer={4} key={i}>
                <Link to={`/jobs/${job._id}`}>
                  <JobsCard job={job} />
                </Link>
              </Grid.Column>
            )}

          </Grid>
        </Container>
      </div>
    </section>
  )
}

export default RecentJobs
