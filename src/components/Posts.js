import React, { useState, useEffect } from 'react'
import { Form, Label, Input, FormText, Button } from 'reactstrap'
import * as yup from 'yup'
import axiosWithAuth from '../axiosWithAuth/axiosWithAuth'

const Posts = () => {
  const [serverError, setServerError] = useState("")

  const [formState, setFormState] = useState({
    photo_url: "",
    photo_title: "",
    photo_description: ""
  })

  const [buttonDisabled, setButtonDisabled] = useState(true)

  const [errors, setErrors] = useState({
    title: "",
    photo_description: "",
    date: "",
    photo_url: ""
  })

  const formSchema = yup.object().shape({
    photo_title: yup.string().required("Title is a required field"),
    photo_description: yup.string().required("photo_description is a required fiels"),
    // date: yup.date().required("Please enter date"),
    photo_url: yup.string().required("Please enter a valid photo_url").matches(/[https://]/)
  })

  useEffect(() => {
    formSchema.isValid(formState).then(isFormValid => {
      setButtonDisabled(!isFormValid) // disabled= false if form is valid
    })
  }, [formState])


  const formSubmit = e => {
    e.preventDefault() // <form> onSubmit has default behavior from HTML!
    console.log(formState)
    axiosWithAuth().post('/users/3/stories',
      {
        photo_url: formState.photo_url,
        photo_title: formState.photo_title,
        photo_description: formState.photo_description
      })
      .then(res => console.log('album posted successfully --> ', res))
      .catch(err => console.log('album post failed --> ', err.response))
    setFormState({
      photo_title: "",
      photo_description: "",
      // date: "",
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
        // if failing validation, set error in state
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        })
      })
  }

  // onChange function
  const inputChange = e => {
    e.persist() // necessary because we're passing the event asyncronously 

    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.value
    }

    validateChange(e) // for each change in input, do inline validation
    setFormState(newFormData) // update state with new data
  }

  return (

    <Form onSubmit={formSubmit}>

      {serverError ? <p className="error">{serverError}</p> : null}
      <Label for="photo_title">
        <legend>Title</legend>
        <Input
          id="photo_title"
          type="text"
          name="photo_title"
          onChange={inputChange}
          value={formState.photo_title}
        />
        {errors.photo_title === '' ? <p className="error">{errors.photo_title}</p> : null}
      </Label><br />
      <Label htmlFor="photo_description">
        <legend>photo_description</legend>
        <Input
          type="textarea"
          name="photo_description"
          id="photo_photo_description"
          placeholder="Please enter details here"
          value={formState.photo_description}
          onChange={inputChange}
        />
        {errors.photo_description.length > 0 ? (
          <p className="error">{errors.photo_description}</p>
        ) : null}
      </Label>
      {/* <br /> */}
      {/* <Label htmlFor="date">
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
        ) : null} */}
      {/* </Label> */}
      <br />
      <Label htmlFor="photo_url">
        <legend>Image photo_url</legend>
        <Input
          type="photo_url"
          name="photo_url"
          id="photo_url"
          placeholder="Please enter image photo_url here"
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