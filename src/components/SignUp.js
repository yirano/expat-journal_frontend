import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap'
import * as yup from 'yup'

const SignUp = () => {
  const [post, setPost] = useState([])

  const [serverError, setServerError] = useState("")

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    userid: "",
    password: ""
  })

  const [buttonDisabled, setButtonDisabled] = useState(true)

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    userid: "",
    password: ""
  })

  const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"), // must include name or else error
    email: yup.string().required("Please enter a valid email id").matches(/[@]/),
    userid: yup.string().required("Userid must be of min  6 chars").min(6),
    password: yup.string().required("Password must be of min 8chars").min(8),
  })

  useEffect(() => {
    console.log(
      "checking to see if all values in form state follows the rules set in formSchema"
    )
    formSchema.isValid(formState).then(isFormValid => {
      console.log("is form valid?", isFormValid)
      setButtonDisabled(!isFormValid) // disabled= false if form is valid
    })
  }, [formState])

  const formSubmit = e => {
    e.preventDefault() // <form> onSubmit has default behavior from HTML!

    setFormState({
      name: "",
      email: "",
      userid: "",
      password: ""
    })

  }

  const validateChange = e => {
    // get the value out of schema at key "e.target.name" --> "name="
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value) // value in input
      .then(inputIsValid => {
        // if inputIsValid is true, then erase any errors in error state at that key/value in errors
        setErrors({
          ...errors,
          [e.target.name]: ""
        })
      })
      .catch(err => {
        // if failing validation, set error in state
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        })
      })
  }

  const inputChange = e => {
    // use persist with async code
    e.persist() // necessary because we're passing the event asyncronously and we need it to exist even after this function completes (which will complete before validateChange finishes)
    console.log("input changed!", e.target.value)
    console.log("name of input that fired event", e.target.name) // [e.target.name]: e.target.value --> computed props

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

      {serverError ? <p className="error">{serverError}</p> : null}
      <Label for="name">
        <legend> Name</legend>
        <Input
          id="name"
          type="text"
          name="name"
          onChange={inputChange}
          placeholder="Please enter your name here"
          value={formState.name}
        />
        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
      </Label><br />
      <Label htmlFor="email">
        <legend>E-Mail</legend>
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="Please enter email id here"
          value={formState.description}
          onChange={inputChange}
        />
        {errors.email.length > 0 ? (
          <p className="error">{errors.email}</p>
        ) : null}
      </Label>
      <br />
      <Label htmlFor="userid">
        <legend>User ID</legend>
        <Input
          type="text"
          name="userid"
          id="userid"
          placeholder="Please enter userid here"
          value={formState.userid}
          onChange={inputChange}
        />
        {errors.userid.length > 0 ? (
          <p className="error">{errors.userid}</p>
        ) : null}
      </Label>
      <br />
      <Label htmlFor="password">
        <legend>Password</legend>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Please enter your password"
          value={formState.password}
          onChange={inputChange}
        />
        {errors.password.length > 0 ? (
          <p className="error">{errors.password}</p>
        ) : null}
      </Label>
      <br />
      <Button type="submit" disabled={buttonDisabled}>Submit </Button>
    </Form>
  )
}


export default SignUp