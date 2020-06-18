import React from "react";
import {Button, Form, FormGroup, Label, Input, Navbar } from 'reactstrap';
import{Link, Route} from 'react-router-dom';
import SignUp from "./SignUp";

const Login=()=>{
    return(
        <>
        <Navbar color='info'>
      <h1 style={{color:"white"}}/>
      <Link to="/">
      <Button color='info'>Home</Button>
      </Link>
      </Navbar>
     {/* <Route exact path="/">*/}
          <Link to ="/signup">
          <Button color='info'style={{position:'absolute', left:'10%', top:'40%'}}>Sign-Up</Button>
        </Link>
       {/* </Route>*/}
      <Route path="/signup" component={SignUp}>
      
        </Route> 

        <Form>
            <FormGroup>
            <Label for="userid">UserID</Label>
            <Input type="text" name="text" id="userid" placeholder="Please enter your Userid" />
            </FormGroup>

            <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="Please enter your Password" />
            </FormGroup> 

            <Button color='info'style={{position:'absolute', left:'10%', top:'30%'}}>Submit</Button>
            <Button color='info'style={{position:'absolute', left:'10%', top:'40%'}}>Sign-Up</Button>

            
         </Form>   
    </>
    );
}

export default Login;