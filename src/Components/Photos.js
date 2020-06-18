import React, { useState } from "react"
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap'
import { images } from '../DummyAPI/images'

const Photos = (props) => {
  console.log(images)
  return (
    <div>
      {images.map((image) => {
        return (

          <Card>
            <CardImg src={image.download_url} alt="" />
            <CardBody>
              <CardTitle>Alejandro Escamilla</CardTitle>
              <CardText>https://unsplash.com/photos/yC-Yzbqy7PY</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>

        )
      })}
    </div>
  )
}

export default Photos