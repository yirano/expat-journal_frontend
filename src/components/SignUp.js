import React from "react";
import {Button, Form, FormGroup, Label, Input, Navbar } from 'reactstrap';
import{Link, Route} from 'react-router-dom';

const SignUp=()=>{
    return(
        <>
        <Form>
            <FormGroup>
            <Label for="name">Name</Label>
            <Input type="name" name="name" id="name" placeholder="Please enter your name" />
          </FormGroup>

            <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Please enter your e-mail" />
            </FormGroup>

            <FormGroup>
            <Label for="userid">UserID</Label>
            <Input type="text" name="text" id="userid" placeholder="Please enter your Userid" />
            </FormGroup>

            <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="Please enter your Password" />
            </FormGroup> 

            <Button color='info'style={{position:'absolute', left:'10%', top:'30%'}}>Sign Up</Button>
         </Form>   
        </>
    );
}

export default SignUp;