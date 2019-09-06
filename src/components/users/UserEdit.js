import React from 'react'
import axios from 'axios'

import { Container, Header } from 'semantic-ui-react'
import Auth from '../../lib/Auth'

import UserForm from './UserForm'

class UserEdit extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {
        email: '',
        fName: '',
        lName: '',
        location: '',
        statement: '',
        portfolio: '',
        github: '',
        linkedIn: '',
        phone: ''
      },
      errors: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { value, name } }){
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e){
    e.preventDefault()

    axios.put('/api/profile', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/profile'))
      .catch(err => this.setState({ errors: err.response.data }))
  }

  componentDidMount(){
    axios.get('/api/profile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        const data = { ...this.state.data, ...res.data }
        this.setState({ data })
      })
      .catch(err => this.setState({ errors: err.response.data }))
  }

  render(){
    return(
      <main>
        <Container>
          <Header></Header>
          <UserForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            data={this.state.data}
            errors={this.state.errors}
            password={false}
            cv={false}
            login={false}
            options={true}
          />
        </Container>
      </main>
    )
  }
}

export default UserEdit
