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
      <Card>
        <CardImg src="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ" alt="" />
        <CardBody>
          <CardTitle>Alejandro Escamilla</CardTitle>
          <CardText>https://unsplash.com/photos/yC-Yzbqy7PY</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Photos