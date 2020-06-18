import React, { useState } from "react"
import axiosWithAuth from '../axiosWithAuth/axiosWithAuth'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'


const Login = (props) => {
  const [credentials, setCredentials] = useState({})
  const handleLogin = e => {
    e.preventDefault()
    props.history.push('/photos')

    // axiosWithAuth().post('http://localhost:5000/api/login', credentials)
    //   .then(res => {
    //     console.log(res);
    //     localStorage.setItem('token', res.data.payload)
    //     props.history.push('/photos')
    //   })
    //   props.setLoggedState(true)
    // props.history.push('/photos')
    // localStorage.setItem('loggedState', true)
  }

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
      <Form onSubmit={handleLogin}>
        <FormGroup>
          <Label for="userid">UserID</Label>
          <Input
            type="text"
            name="username"
            id="userid"
            placeholder="Please enter your Userid"
            value={credentials.username}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password"
            name="password"
            id="password"
            placeholder="Please enter your Password"
            value={credentials.password}
            onChange={handleChange}
          />
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