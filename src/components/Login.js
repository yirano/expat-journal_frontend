import React, { useState, useEffect } from "react"
import * as yup from "yup"
import axiosWithAuth from '../axiosWithAuth/axiosWithAuth'
import { Button, Form, FormGroup, Label, Input, legend } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Login(props) {
  const [credentials, setCredentials] = useState({
    userid: "",
    password: ""
  })

  const [formState, setFormState] = useState({
    userid: "",
    password: ""
  })

  const [serverError, setServerError] = useState("")

  const [buttonDisabled, setButtonDisabled] = useState(true)

  const [errors, setErrors] = useState({
    userid: "",
    password: ""
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
    formSchema.validate(credentials)
    // setCredentials({ ...credentials, [e.target.name]: e.target.value })
    //formSchema.validate(credentials)
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  //* Login Page Validation-REACT I

  const formSchema = yup.object().shape({
    userid: yup.string().required("UserId is a required field"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z@]/),
  })

  useEffect(() => {
    console.log(
    )
    formSchema.isValid(formState).then(isFormValid => {
      console.log("is form valid?", isFormValid)
      setButtonDisabled(!isFormValid)
    })
  }, [formState])


  const formSubmit = e => {
    e.preventDefault()

    setFormState({
      userid: "",
      password: "",
    })
  }

  const validateChange = e => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(inputIsValid => {
        setErrors({
          ...errors,
          [e.target.name]: ""
        })
      })
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        })
      })
  }


  const inputChange = e => {
    e.persist()


    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.value // // remember value of the checkbox is in "checked" and all else is "value"
    }

    validateChange(e) // for each change in input, do inline validation
    setFormState(newFormData) // update state with new data
  }

  return (

    <Form onSubmit={formSubmit}>
      <h1>Welcome to Expat Journal!!</h1>
      <h5>If you're a new user, please register.<br />
If you've already registered, please login to view posts.</h5>
      {serverError ? <p className="error">{serverError}</p> : null}
      <Label for="userid">
        <legend>UserId</legend>
        <Input
          id="userid"
          type="text"
          name="userid"
          placeholder="Please enter userid here"
          onChange={inputChange}
          value={formState.userid}
        />
        {errors.userid.length > 0 ? <p className="error">{errors.userid}</p> : null}
      </Label><br />
      <Label htmlFor="password">
        <legend>Password</legend>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Please enter password here"
          value={formState.password}
          onChange={inputChange}
        />
        {errors.password.length > 0 ? (
          <p className="error">{errors.password}</p>
        ) : null}
      </Label>
      <br />

      <Button type="submit" disabled={buttonDisabled}>Submit </Button>
      <Link to="/signup"><br />

        <Button type="submit">Register</Button>
      </Link>
    </Form>


  )
}



