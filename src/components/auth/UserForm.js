import React from 'react'

import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const UserForm = ({ handleChange, handleSubmit, data, errors }) => {
  return(
    <Form onSubmit={handleSubmit}>

      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="First Name"
          name="fName"
          value={data.fName}
          onChange={handleChange}
          placeholder="Please enter your first name..."
        />
        <Form.Input
          fluid
          label="Last Name"
          name="lName"
          value={data.lName}
          onChange={handleChange}
          placeholder="Please enter your last name..."
        />
      </Form.Group>
      {errors && <p className="error-message">{errors.fName}</p>}

      <Form.Input
        fluid
        label="Location"
        name="location"
        value={data.location}
        onChange={handleChange}
        placeholder="Please enter your location (e.g. London)..."
      />
      {errors && <p className="error-message">{errors.location}</p>}

      <Form.Input
        fluid
        label="CV"
        type="file"
        name="cv"
        value={data.cv}
        onChange={handleChange}
        placeholder="Please attach your CV"
      />
      {errors && <p className="error-message">{errors.cv}</p>}

      <Form.Input
        fluid
        label="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Please enter your email..."
      />
      {errors && <p className="error-message">{errors.email}</p>}

      <Form.Input
        fluid
        label="Password"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        placeholder="Please enter your password..."
      />
      {errors && <p className="error-message">{errors.password}</p>}

      <Form.Input
        fluid
        label="Password Confirmation"
        type="password"
        name="passwordConfirmation"
        value={data.passwordConfirmation}
        onChange={handleChange}
        placeholder="Please re-enter your password..."
      />
      {errors && <p className="error-message">{errors.passwordConfirmation}</p>}

      <Form.Button><span>Register</span></Form.Button>
      <p>Already registered? <Link to="/login">Log in here!</Link></p>
    </Form>
  )
}

export default UserForm
