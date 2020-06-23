import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { Form, Label, Input, FormText, Button } from 'reactstrap'
import * as yup from 'yup'

const Posts = () => {
  // const [post, setPost] = useState([])

  const [serverError, setServerError] = useState("")

  const [formState, setFormState] = useState({
    title: "",
    description: "",
    date: "",
    url: ""
  })

  const [buttonDisabled, setButtonDisabled] = useState(true)

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    date: "",
    url: ""
  })

  const formSchema = yup.object().shape({
    title: yup.string().required("Title is a required field"), // must include name or else error
    description: yup.string().required("Description is a required fiels"),
    date: yup.date().required("Please enter date"),
    url: yup.string().required("Please enter a valid URL").matches(/[https://]/)
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
      title: "",
      description: "",
      date: "",
      url: ""
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

  // onChange function
  const inputChange = e => {
    // use persist with async code
    e.persist() // necessary because we're passing the event asyncronously and we need it to exist even after this function completes (which will complete before validateChange finishes)
    // console.log("input changed!", e.target.value)
    // console.log("name of input that fired event", e.target.name) // [e.target.name]: e.target.value --> computed props

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
      <Label for="title">
        <legend>Title</legend>
        <Input
          id="title"
          type="text"
          name="title"
          onChange={inputChange}
          value={formState.title}
        />
        {errors.title.length > 0 ? <p className="error">{errors.title}</p> : null}
      </Label><br />
      <Label htmlFor="description">
        <legend>Description</legend>
        <Input
          type="textarea"
          name="description"
          id="description"
          placeholder="Please enter details here"
          value={formState.description}
          onChange={inputChange}
        />
        {errors.description.length > 0 ? (
          <p className="error">{errors.description}</p>
        ) : null}
      </Label>
      <br />
      <Label htmlFor="date">
        <legend>Date</legend>
        <Input
          type="date"
          name="date"
          id="date"
          placeholder="Please select date here"
          value={formState.date}
          onChange={inputChange}
        />
        {errors.date.length > 0 ? (
          <p className="error">{errors.date}</p>
        ) : null}
      </Label>
      <br />
      <Label htmlFor="url">
        <legend>Image URL</legend>
        <Input
          type="url"
          name="url"
          id="url"
          placeholder="Please enter image URL here"
          value={formState.url}
          onChange={inputChange}
        />
        {errors.url.length > 0 ? (
          <p className="error">{errors.url}</p>
        ) : null}
      </Label>
      <br />
      <Button type="submit" disabled={buttonDisabled}> Post </Button>

    </Form>
  )
}

export default Posts