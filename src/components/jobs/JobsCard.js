import React from 'react'

import { Card } from 'semantic-ui-react'

const JobsCard = ({ job }) => {
  return (
    <Card>
      <Card.Content>

        <Card.Header>{job.name}</Card.Header>
        <Card.Meta>Posted {Date(job.createdAt).toString().substring(4, 15)}</Card.Meta>

      </Card.Content>


      <Card.Content extra>{job.sectors.map(sector => sector.name).join(', ')}</Card.Content>
    </Card>
  )
}

export default JobsCard
