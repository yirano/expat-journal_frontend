import React, { useState,useEffect } from "react"
import * as yup from "yup";
import axiosWithAuth from '../axiosWithAuth/axiosWithAuth'
import { Button, Form, FormGroup, Label, Input,legend } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Login (props)  {
  const [credentials, setCredentials] = useState({})
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
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  //Login Page Validation-REACT I

  const [post, setPost] = useState([]);

  const [serverError, setServerError] = useState("");
  // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    password: "",
    });

  // control whether or not the form can be submitted if there are errors in form validation (in the useEffect)
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // managing state for errors. empty unless inline validation (validateInput) updates key/value pair to have error
  const [errors, setErrors] = useState({
    name: "",
    password: "",
      });

  // schema used for all validation to determine whether the input is valid or not
  const formSchema = yup.object().shape({
    name: yup.string().required("User ID is a required field").min(6, "Userid is too short, it should be 6 chars min"), // must include name or else error
     password: yup
      .string()
      .required("Please enter your password")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z@]/),
   
  });

  // whenever state updates, validate the entire form. if valid, then change button to be enabled.
  useEffect(() => {
    console.log(
      "checking to see if all values in form state follows the rules set in formSchema"
    );
    formSchema.isValid(formState).then(isFormValid => {
      console.log("is form valid?", isFormValid);
      setButtonDisabled(!isFormValid); // disabled= false if form is valid
    });
  }, [formState]);

  // onSubmit function
  const formSubmit = e => {
    e.preventDefault(); // <form> onSubmit has default behavior from HTML!

        setFormState({
          name: "",
          password: "",
                  });

        
  };

  // inline validation, validating one key/value pair at a time
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
        });
      })
      .catch(err => {
        // if failing validation, set error in state
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        });
      });
  };

  // onChange function
  const inputChange = e => {
    // use persist with async code
    e.persist(); // necessary because we're passing the event asyncronously and we need it to exist even after this function completes (which will complete before validateChange finishes)
    console.log("input changed!", e.target.value);
    console.log("name of input that fired event", e.target.name); // [e.target.name]: e.target.value --> computed props

    const newFormData = {
      ...formState,
      [e.target.name]:
         e.target.value // // remember value of the checkbox is in "checked" and all else is "value"
    };

    validateChange(e); // for each change in input, do inline validation
    setFormState(newFormData); // update state with new data
  };

  return (
    <Form onSubmit={formSubmit}>
      
      {serverError ? <p className="error">{serverError}</p> : null}
      <Label for="name">
       <legend> User ID</legend>
        <Input
          id="name"
          type="text"
          name="name"
          onChange={inputChange}
          value={formState.name}
        />
        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
      </Label><br/>
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

      <Button style={{color:"info"}}type="submit" disabled={buttonDisabled}>
        Submit
      </Button><br/>
      <Link to="/signup">
      <Button style={{color:"info"}}type="submit" >
        Submit
      </Button>
      </Link>
    
    </Form>
  );
}

 
  
