import React from "react";
import {Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Login=()=>{
    return(
        <Form>
            <FormGroup>
            <Label for="userid">UserID</Label>
            <Input type="text" name="text" id="userid" placeholder="Please enter your Userid" />
            </FormGroup>

            <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="Please enter your Password" />
            </FormGroup> 
         </Form>   
    
    );
}

export default Login;