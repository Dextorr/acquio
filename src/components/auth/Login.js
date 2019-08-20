import React from 'react'

import { Container, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Auth from '../../lib/Auth'

class Login extends React.Component {


  render(){
    return(
      <main>
        <Container>
          <Form>

            <Form.Input
              fluid
              label="Email" 
              placeholder="Please enter your email..."
            />
            <Form.Input
              fluid
              label="Password"
              placeholder="Please enter your password..."
            />

            <Form.Button>Log In</Form.Button>
          </Form>
        </Container>
      </main>
    )
  }
}

export default Login
