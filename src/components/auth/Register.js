import React from 'react'
import axios from 'axios'

import { Container, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Register extends React.Component{
  constructor(){
    super()

    this.state = {
      data: {
        fName: '',
        lName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        location: '',
        cv: ''
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
    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({ errors: err.response.data }))
  }

  render(){
    return(
      <main>
        <Container>
          <Form onSubmit={this.handleSubmit}>

            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="First Name"
                name="fName"
                value={this.state.data.fName}
                onChange={this.handleChange}
                placeholder="Please enter your first name..."
              />
              <Form.Input
                fluid
                label="Last Name"
                name="lName"
                value={this.state.data.lName}
                onChange={this.handleChange}
                placeholder="Please enter your last name..."
              />
            </Form.Group>
            {this.state.errors && <p className="error-message">{this.state.errors.fName}</p>}

            <Form.Input
              fluid
              label="Location"
              name="location"
              value={this.state.data.location}
              onChange={this.handleChange}
              placeholder="Please enter your location (e.g. London)..."
            />
            {this.state.errors && <p className="error-message">{this.state.errors.location}</p>}

            <Form.Input
              fluid
              label="CV"
              type="file"
              name="cv"
              value={this.state.data.cv}
              onChange={this.handleChange}
              placeholder="Please attach your CV"
            />
            {this.state.errors && <p className="error-message">{this.state.errors.cv}</p>}

            <Form.Input
              fluid
              label="Email"
              name="email"
              value={this.state.data.email}
              onChange={this.handleChange}
              placeholder="Please enter your email..."
            />
            {this.state.errors && <p className="error-message">{this.state.errors.email}</p>}

            <Form.Input
              fluid
              label="Password"
              type="password"
              name="password"
              value={this.state.data.password}
              onChange={this.handleChange}
              placeholder="Please enter your password..."
            />
            {this.state.errors && <p className="error-message">{this.state.errors.password}</p>}

            <Form.Input
              fluid
              label="Password Confirmation"
              type="password"
              name="passwordConfirmation"
              value={this.state.data.passwordConfirmation}
              onChange={this.handleChange}
              placeholder="Please re-enter your password..."
            />
            {this.state.errors && <p className="error-message">{this.state.errors.passwordConfirmation}</p>}

            <Form.Button><span>Register</span></Form.Button>
            <p>Already registered? <Link to="/login">Log in here!</Link></p>
          </Form>
        </Container>
      </main>
    )
  }
}

export default Register
