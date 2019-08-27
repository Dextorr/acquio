import React from 'react'
import axios from 'axios'

import { Container } from 'semantic-ui-react'

import UserForm from '../auth/UserForm'

class QuickApply extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {
        fName: '',
        lName: '',
        email: '',
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
    axios.put(`/api/jobs/${this.props.match.params.id}/quickapply`, this.state.data)
      .then(() => this.props.history.push('/jobs'))
      .catch(err => {
        if (err.response){
          const errors = {}
          const keys = Object.keys(err.response.data)
          const newKeys = keys.map(key => {
            const keyParts = key.split('.')
            return { [key]: keyParts[2] }
          })
          newKeys.forEach(key => {
            const oldKey = Object.keys(key)[0]
            errors[key[oldKey]] = err.response.data[oldKey]
          })
          this.setState({ errors })
        }
      })
  }

  render(){
    return(
      <main className="quick-apply">
        <Container>
          <UserForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            data={this.state.data}
            errors={this.state.errors}
            password={false}
          />
        </Container>
      </main>
    )
  }
}

export default QuickApply
