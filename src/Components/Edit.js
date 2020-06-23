import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { Form, Label, Input, FormText, Button } from 'reactstrap'
import * as yup from 'yup'
function update(){
    alert("Record updated successfully")
}

const Edit = () => {
  // const [post, setPost] = useState([])

  

  const [formState, setFormState] = useState({
    title: "",
    description: "",
    date: "",
    url: ""
  })

  

  
  const formSubmit = e => {
    e.preventDefault() // <form> onSubmit has default behavior from HTML!

    setFormState({
      title: "",
      description: "",
      date: "",
      url: ""
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

   
    setFormState(newFormData) // update state with new data
  }

  return (

    <Form onSubmit={formSubmit}>

      
      <Label for="title">
        <legend>Title</legend>
        <Input
          id="title"
          type="text"
          name="title"
          onChange={inputChange}
          value={formState.title}
        />
        
      </Label><br />
      <Label htmlFor="description">
        <legend>Description</legend>
        <Input
          type="textarea"
          name="description"
          id="description"
          placeholder=""
          value={formState.description}
          onChange={inputChange}
        />
       </Label>
      <br />
      <Label htmlFor="date">
        <legend>Date</legend>
        <Input
          type="date"
          name="date"
          id="date"
          placeholder=""
          value={formState.date}
          onChange={inputChange}
        />
              </Label>
      <br />
      <Label htmlFor="url">
        <legend>Image URL</legend>
        <Input
          type="url"
          name="url"
          id="url"
          placeholder=""
          value={formState.url}
          onChange={inputChange}
        />
             </Label>
      <br />
      <Button  type="submit" onClick={update}> Update </Button>
      
    </Form>
  )
}

export default Edit