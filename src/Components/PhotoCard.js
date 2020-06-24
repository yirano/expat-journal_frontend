import React, { useEffect, useState } from 'react'
import { spotLight } from '../Action/action'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap'
import styled from 'styled-components'
import { connect } from 'react-redux'

const StyledImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: flex-end;
`

const PhotoCard = ({ image, height }) => {

  return (
    <Card style={{ width: "100%" }}>
      <StyledImageContainer style={{ height: height }}>
        <CardImg src={image.photo_url} alt="" style={{ minHeight: '100%' }} />
      </StyledImageContainer>

      <CardBody>
        <CardTitle>Title: {image.photo_title}</CardTitle>
        <CardText>Description: {image.photo_description}</CardText>
      </CardBody>
    </Card>
  )
}

export default PhotoCard
