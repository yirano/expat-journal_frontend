import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: flex-end;
`

const PhotoCard = ({ image, height }) => {
  return (
    <Card style={{ width: "100%" }}>
      <Link to={`/photos/${image.id}`}>
        <StyledImageContainer style={{ height: height }}>
          <CardImg src={image.download_url} alt="" style={{ height: '100%' }} />
        </StyledImageContainer>
        <CardBody>
          <CardTitle>Title:{image.author}</CardTitle>
          <CardText>Description:{image.url}</CardText>
        </CardBody>
      </Link>
    </Card>
  )
}

export default PhotoCard
