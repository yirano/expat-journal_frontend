import React from "react"
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap'

const Posts = () => {
  return (
    <div className="posts">
      <Card>
        <CardImg top width="100%" src="" alt="" />
        <CardBody>
          <CardTitle>Title</CardTitle>
          <CardText>Some text </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  )
}


export default Posts