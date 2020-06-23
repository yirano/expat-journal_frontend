import React, { useState, useEffect } from 'react'
import { Form, Label, Input, Button } from 'reactstrap'
import * as yup from 'yup'
import axiosWithAuth from '../axiosWithAuth/axiosWithAuth'

const Posts = () => {

  const [serverError, setServerError] = useState("")

  const [formState, setFormState] = useState({
    title: "",
    description: "",
    photo_url: ""
  })

  const [buttonDisabled, setButtonDisabled] = useState(true)

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    photo_url: ""
  })

  const formSchema = yup.object().shape({
    title: yup.string().required("Title is a required field"),
    description: yup.string().required("Description is a required fiels"),
    photo_url: yup.string().required("Please enter a valid URL").matches(/[https://]/)
  })

  useEffect(() => {

    formSchema.isValid(formState).then(isFormValid => {
      console.log("is form valid?", isFormValid)
      setButtonDisabled(!isFormValid) // disabled= false if form is valid
    })
  }, [formState])


  const formSubmit = e => {
    e.preventDefault()
    axiosWithAuth().post('/posts/user/1', formState)
      .then(res => console.log(res))
      .catch(err => console.log(err.response))
    setFormState({
      title: "",
      description: "",
      photo_url: ""
    })
  }

  const validateChange = e => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value) // value in input
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
        e.target.value
    }

    validateChange(e)
    setFormState(newFormData)
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
      <Label htmlFor="url">
        <legend>Image URL</legend>
        <Input
          type="url"
          name="photo_url"
          id="photo_url"
          placeholder="Please enter image URL here"
          value={formState.photo_url}
          onChange={inputChange}
        />
        {errors.photo_url.length > 0 ? (
          <p className="error">{errors.photo_url}</p>
        ) : null}
      </Label>
      <br />
      <Button type="submit" disabled={buttonDisabled}> Post </Button>

    </Form>
  )
}

export default Posts