import React,{useState} from 'react';
import { Form, FormGroup, Label, Input, FormText,Button } from 'reactstrap';
import * as yup from 'yup';

const Posts = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date:"",
    url:""
      });

      const schema = yup.object().shape({
        title: yup.string().required("Please enter title"), 
        description:yup.string().required("Please enter description"),
        date:yup.date().required("Please enter date"),
        url:yup.string().required("Please enter a valid URL").matches(/[https://]/)
      });    

      const submit=()=>{
        schema.validate(formData);
      }

      const handle=e=>(
        setFormData({...formData,[e.target.name]:e.target.value})
    )
     
  return (
    <Form>
       <FormGroup>
          <Label for="title">Title</Label>
          <Input type="title" name="title" id="Title" placeholder="Please enter title" value={formData.title}
            onChange={handle} />
        </FormGroup>
      
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="description" name="description" id="description" placeholder="Please enter description" value={formData.description}
            onChange={handle}/>
        </FormGroup>

        <FormGroup>
        <Label for="date">Date</Label>
        <Input
          type="date"
          name="date"
          id="date"
          placeholder="Please enter date:MM/DD/YYYY"
          value={formData.date}
            onChange={handle}
        />
      </FormGroup>
      
      {/*<FormGroup>
        <Label for="file">File</Label>
        <Input type="file" name="file" id="file" />
        <FormText color="muted">
          
        </FormText>
      </FormGroup>*/}

      <FormGroup>
        <Label for="url">Url</Label>
        <Input
          type="url"
          name="url"
          id="url"
          placeholder="Please enter URL"
          value={formData.url}
            onChange={handle}
        />
      </FormGroup>

      <Button color='info' type="submit" >Post</Button>
          </Form>
  );
}

export default Posts;