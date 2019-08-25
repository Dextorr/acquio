import React from 'react'
import axios from 'axios'

import { Container, Form, Header, Segment } from 'semantic-ui-react'

class CompaniesNew extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {
        contact: {
          fName: '',
          lName: '',
          title: '',
          phone: '',
          email: '',
          overview: ''
        },
        companyName: '',
        location: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleContactChange = this.handleContactChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }){
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleContactChange({ target: {name, value } }){
    const contact = { ...this.state.data.contact, [name]: value }
    this.setState({ data: { contact } })
  }

  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/companies', this.state.data)
      .then(() => this.props.history.push('/'))
      .catch(err => this.setState({ errors: err.response.data }))
  }

  render(){
    return(
      <main className="company-new">
        <Container>
          <Form onSubmit={this.handleSubmit}>

            <Segment className="company-contact-details">
              <Header as="h3">Contact Details</Header>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="First Name"
                  name="fName"
                  value={this.state.data.contact.fName}
                  onChange={this.handleContactChange}
                  placeholder="Please enter your first name..."
                />
                <Form.Input
                  fluid
                  label="Last Name"
                  name="lName"
                  value={this.state.data.contact.lName}
                  onChange={this.handleContactChange}
                  placeholder="Please enter your last name..."
                />
              </Form.Group>
              {this.state.errors && <p className="error-message">{this.state.errors.fName}</p>}

              <Form.Input
                fluid
                label="Job Title"
                name="title"
                value={this.state.data.contact.title}
                onChange={this.handleContactChange}
                placeholder="Please enter your job title..."
              />

              <Form.Input
                fluid
                label="Contact Number"
                name="phone"
                value={this.state.data.contact.phone}
                onChange={this.handleContactChange}
                placeholder="Please enter your contact number..."
              />

              <Form.Input
                fluid
                label="Email Address"
                name="email"
                value={this.state.data.contact.email}
                onChange={this.handleContactChange}
                placeholder="Please enter your email address..."
              />

              <Form.TextArea
                label="Overview"
                name="overview"
                value={this.state.data.contact.overview}
                onChange={this.handleContactChange}
                placeholder="Tell us more about what you're looking for... (e.g. Number and types of roles, industry sectors you're involved with.)"
              />

            </Segment>

            <Segment className="company-details">
              <Header as="h3">Company Details</Header>
              <Form.Input
                fluid
                label="Company Name"
                name="companyName"
                value={this.state.data.companyName}
                onChange={this.handleChange}
                placeholder="Please enter your company name..."
              />
              {this.state.errors && <p className="error-message">{this.state.errors.location}</p>}

              <Form.Input
                fluid
                label="Location"
                name="location"
                value={this.state.data.location}
                onChange={this.handleChange}
                placeholder="Please enter your location (e.g. London)..."
              />
              {this.state.errors && <p className="error-message">{this.state.errors.location}</p>}
            </Segment>


            <Form.Button>Submit</Form.Button>
          </Form>
        </Container>
      </main>
    )
  }
}

export default CompaniesNew
