import React from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  const handleLogin = e => {
    console.log('User logged in')
  }
  return (
    <>
      <Form onSubmit={handleLogin}>
        <FormGroup>
          <Label for="userid">UserID</Label>
          <Input type="text" name="text" id="userid" placeholder="Please enter your Userid" />
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Please enter your Password" />
        </FormGroup>

        <Button color='info' type="submit" >Login</Button>
        <Link to="/signup">
          <Button color='info'>Sign-Up</Button>
        </Link>
      </Form>
    </>
  )
}

export default Login