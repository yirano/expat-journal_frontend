import React, { useState, useEffect } from 'react'
import { Form, Label, Input, Button } from 'reactstrap'
import * as yup from 'yup'
import { addAlbum } from '../Action/action'
import { connect } from 'react-redux'
import styled from 'styled-components'
const StyledHeader = styled.h1`
    // text-align: center;
  `

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5% 0;
  `

const AddAlbum = (props) => {

  const [serverError, setServerError] = useState("")

  const [formState, setFormState] = useState({
    story_name: "",
    story_description: "",
    
  })

  const [buttonDisabled, setButtonDisabled] = useState(true)

  const [errors, setErrors] = useState({
    story_name: "",
    story_description: "",
    
  })

  const formSchema = yup.object().shape({
    story_name: yup.string().required("Title is a required field"),
    story_description: yup.string().required("Description is a required fiels"),
    
  })

  useEffect(() => {
    formSchema.isValid(formState).then(isFormValid => {
      setButtonDisabled(!isFormValid) // disabled= false if form is valid
    })


  }, [formState])

  const formSubmit = e => {
    e.preventDefault()
    const id = localStorage.getItem('id')
    console.log(formState)
    props.addAlbum(formState, id)
    setFormState({
      story_name: "",
      story_description: "",
      photo_url:""
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
    <StyledForm>
      <StyledHeader>Start an Album</StyledHeader>
      <Form onSubmit={formSubmit}>
        {serverError ? <p className="error">{serverError}</p> : null}
        <Label for="story_name">
          <legend>Title</legend>
          <Input
            id="story_name"
            type="text"
            name="story_name"
            onChange={inputChange}
            value={formState.story_name}
          />
          {errors.story_name === '' ? <p className="error">{errors.story_name}</p> : null}
        </Label><br />
        <Label htmlFor="story_description">
          <legend>Story Description</legend>
          <Input
            type="textarea"
            name="story_description"
            id="photo_story_description"
            placeholder="Please enter details here"
            value={formState.story_description}
            onChange={inputChange}
          />
          {errors.story_description === '' ? (
            <p className="error">{errors.story_description}</p>
          ) : null}
        </Label>
        <br />
        
        

      </Form>
    </StyledForm>
  )
}

export default connect(null, { addAlbum })(AddAlbum)