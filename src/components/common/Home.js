import React from 'react'

import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return(
    <main className="home">
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
    </main>
  )
}

export default Home
