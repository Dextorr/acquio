import React from 'react'

import { Container, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
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
    </section>
  )
}

export default Hero
