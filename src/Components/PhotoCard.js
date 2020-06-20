import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap'
import { Link } from 'react-router-dom'


const PhotoCard = ({ image }) => {
  return (
    <Card style={{width:"100%"}}>
      <Link to={`/photos/${image.id}`}>
        <CardImg src={image.download_url} alt="" width="200" height="400" crop="fill" />
          

        <CardBody>
          <CardTitle>Title:{image.author}</CardTitle>
          <CardText>Description:{image.url}</CardText>
        </CardBody>
      </Link>
    </Card>
  )
}

export default PhotoCard
