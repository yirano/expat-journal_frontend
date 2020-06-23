import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle,
  Button
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
      {/* {console.log('PhotoCard --> ', image)} */}
      <StyledImageContainer style={{ height: height }}>
        <CardImg src={image.photo_url} alt="" style={{ minHeight: '100%' }} />
      </StyledImageContainer>

      <CardBody>
        <CardTitle>Title:{image.title}</CardTitle>
        <CardText>Description:{image.description}</CardText>
      </CardBody>

    </Card>
  )
}

export default PhotoCard
