import React from 'react'
import axios from 'axios'

import { Container, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Auth from '../../lib/Auth'
import Flash from '../../lib/Flash'

class Login extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {
        email: '',
        password: ''
      },
      errors: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }){
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        Flash.setMessage('Logged in successfully', res.data.message)
      })
      .then(() => this.props.history.push('/profile'))
      .catch(err => this.setState({ errors: err.response.data }))
  }

  render(){
    return(
      <main>
        <Container>
          <Form onSubmit={this.handleSubmit}>

            <Form.Input
              fluid
              label="Email"
              name="email"
              value={this.state.data.email}
              onChange={this.handleChange}
              placeholder="Please enter your email..."
            />
            <Form.Input
              fluid
              label="Password"
              type="password"
              name="password"
              value={this.state.data.password}
              onChange={this.handleChange}
              placeholder="Please enter your password..."
            />
            {this.state.errors && <p className="error-message">{this.state.errors.message}</p>}

            <Form.Button><span>Log In</span></Form.Button>
            <p>No account? <Link to="/register">Sign up here!</Link></p>
          </Form>
        </Container>
      </main>
    )
  }
}

export default Login
