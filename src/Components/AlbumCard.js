import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import styled from 'styled-components'

const StyledImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: flex-end;
`
const AlbumCard = ({ width, height, album }) => {
  return (
    <Card style={{ width: "100%" }}>
      {/* <StyledImageContainer style={{ height: height, width: width }}>
        <CardImg src={album.photo_url} alt="" style={{ minHeight: '100%' }} />
      </StyledImageContainer> */}


      <CardBody>
        <CardTitle>Title: {album.story_name}</CardTitle>
        <CardText>Description: {album.story_description}</CardText>
      </CardBody>
    </Card>
  )
}

export default AlbumCard
