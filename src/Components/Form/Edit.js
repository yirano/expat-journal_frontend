import React, { useState, useEffect } from 'react'
import { Form, Label, Input, Button } from 'reactstrap'
import { addPost, editPost } from '../../Action/action'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import axiosWithAuth from '../../axiosWithAuth/axiosWithAuth'
const initialState = {
  photo_url: '',
  photo_title: '',
  photo_description: ''
}
const Edit = (props) => {
  const param = useParams().id
  console.log('STUFF ', props.stuff)

  const [formState, setFormState] = useState(initialState)

  const handleSubmit = e => {
    e.preventDefault()
    props.editPost(param, formState)
    setFormState(initialState)
  }

  useEffect(() => {
    axiosWithAuth().get(`/photos/${param}`)
      .then(res => {
        setFormState({
          photo_url: res.data.photo_url,
          photo_title: res.data.photo_title,
          photo_description: res.data.photo_description
        })
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]:
        e.target.value
    })
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
            onChange={e => handleChange(e)}
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
            onChange={e => handleChange(e)}
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
            onChange={e => handleChange(e)}
          />
        </Label>
        <Button type="submit"> Post </Button>
      </Form>
    </>
  )
}

export default connect(null, { addPost, editPost })(Edit)
