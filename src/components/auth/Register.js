import React from 'react'
import axios from 'axios'

import { Container } from 'semantic-ui-react'

import UserForm from './UserForm'

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
    axios.post(`/api/jobs/${this.props.params.match.id}/quickapply/`, this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({ errors: err.response.data }))
  }

  render(){
    return(
      <main>
        <Container>
          <UserForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            data={this.state.data}
          />
        </Container>
      </main>
    )
  }
}

export default Register
