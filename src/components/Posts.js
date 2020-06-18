import React from 'react';
import { Form, FormGroup, Label, Input, FormText,Button } from 'reactstrap';

const Posts = () => {
  return (
    <Form>
       <FormGroup>
          <Label for="title">Title</Label>
          <Input type="title" name="title" id="Title" placeholder="Please enter title" />
        </FormGroup>
      
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="description" name="description" id="description" placeholder="Please enter description" />
        </FormGroup>

        <FormGroup>
        <Label for="date">Date</Label>
        <Input
          type="date"
          name="date"
          id="date"
          placeholder="Please enter date:MM/DD/YYYY"
        />
      </FormGroup>
      
      <FormGroup>
        <Label for="file">File</Label>
        <Input type="file" name="file" id="file" />
        <FormText color="muted">
          
        </FormText>
      </FormGroup>

      <Button color='info' type="submit" >Post</Button>
          </Form>
  );
}

export default Posts;