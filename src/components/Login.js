import React, { useState } from "react"
import * as yup from "yup"
import axiosWithAuth from '../axiosWithAuth/axiosWithAuth'
import { Button, Form, FormGroup, Label, Input, legend } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Login(props) {
  const [credentials, setCredentials] = useState({
    userid: "",
    password: "",
  })

  const handleLogin = e => {
    e.preventDefault()
    props.history.push('/photos')

    // axiosWithAuth().post('http://localhost:5000/api/login', credentials)
    //   .then(res => {
    //     console.log(res)
    //     localStorage.setItem('token', res.data.payload)
    //     props.history.push('/photos')
    //   })
    // props.setLoggedState(true)
    // props.history.push('/photos')
    // localStorage.setItem('loggedState', true)
  }

  const handleChange = e => {
    schema.validate(credentials)
    // setCredentials({ ...credentials, [e.target.name]: e.target.value })
    setCredentials({ ...credentials, [e.target.name]: e.target.value })

  }

  //* Login Page Validation-REACT I

  const schema = yup.object().shape({
    userid: yup.string().required("UserId is a required field"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z@]/),
  })

  return (
    <>
      <Form onSubmit={(e) => {
        e.preventDefault()
        // console.log(formData)
        handleLogin()
      }}
        style={{ margin: '5%' }}>
        <FormGroup>
          <Label for="userid">UserID</Label>
          <Input
            type="text"
            name="userid"
            id="userid"
            placeholder="Please enter your Userid"
            value={credentials.userid}
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


