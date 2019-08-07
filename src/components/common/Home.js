import React from 'react'

import { Container, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return(
    <main className="home">
      <div className="hero">
        <Container>

          <Link to="/hiring">
            <Button>
              HIRING
            </Button>
          </Link>

          <Link to="/jobs">
            <Button>
              JOBS
            </Button>
          </Link>

        </Container>
      </div>
    </main>
  )
}

export default Home
