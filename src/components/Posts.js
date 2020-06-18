import React from "react"
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap'

const Posts = (props) => {
  return (
    <div className="posts">
      <Card>
        <CardImg src="https://unsplash.com/photos/yC-Yzbqy7PY" alt="" />
        <CardBody>
          <CardTitle>Alejandro Escamilla</CardTitle>
          <CardText>https://unsplash.com/photos/yC-Yzbqy7PY</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  )
}
console.log(CardImg);

export default Posts