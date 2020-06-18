import React, { useState } from "react"
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap'
import { images } from '../DummyAPI/images'

const Photos = () => {
  console.log(images)
  return (
    <div>
      {images.map((image) => {
        return (

          <Card style={{width:"30%", height:"30%"}}>
            <CardImg src={image.download_url} alt="" />
            <CardBody>
              <CardTitle>{image.author}</CardTitle>
              <CardText>{image.url}</CardText>
              </CardBody>
          </Card>

        )
      })}
    </div>
  )
}

export default Photos