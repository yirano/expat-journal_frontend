import React, { useState, useEffect } from 'react'
import { Form, Label, Input, Button } from 'reactstrap'
import { addPost, spotLight } from '../Action/action'
import { connect } from 'react-redux'

const Edit = (props) => {
  const initialState = {
    photo_url: '',
    photo_title: '',
    photo_description: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = e => {
    e.preventDefault()
    props.addPost(formState)
    setFormState(initialState)
  }

  const handleChange = e => {
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.value
    }
    setFormState(newFormData)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label for="photo_title">
          <legend>Title</legend>
          <Input
            id="photo_title"
            type="text"
            name="photo_title"
            onChange={handleChange}
            value={formState.photo_title}
          />
        </Label><br />
        <Label htmlFor="photo_description">
          <legend>photo_description</legend>
          <Input
            type="textarea"
            name="photo_description"
            id="photo_photo_description"
            placeholder="Please enter details here"
            value={formState.photo_description}
            onChange={handleChange}
          />
        </Label>
        <br />
        <Label htmlFor="photo_url">
          <legend>Image photo_url</legend>
          <Input
            type="url"
            name="photo_url"
            id="photo_url"
            placeholder="Please enter image URL here"
            value={formState.photo_url}
            onChange={handleChange}
          />
        </Label>
        <Button type="submit"> Post </Button>
      </Form>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    spotLight: state.spotLight
  }
}

export default connect(mapStateToProps, { addPost })(Edit)