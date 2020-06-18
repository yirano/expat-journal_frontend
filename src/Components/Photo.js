import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap'

const Photo = ({ image }) => {
  return (
    <Card style={{ minWidth: '300px', width: '300px', height: '350px' }}>
      <CardImg src={image.download_url} alt="" />
      <CardBody>
        <CardTitle>{image.author}</CardTitle>
        <CardText>{image.url}</CardText>
      </CardBody>
    </Card>
  )
}

export default Photo
