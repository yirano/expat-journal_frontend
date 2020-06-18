import React, { useState } from "react"
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap'
import { connect } from 'react-redux'
import styled from 'styled-components'

const StyledCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Photos = ({ images }) => {
  console.log(images)
  return (
    <StyledCard>
      {images.map((image) => {
        return (

          <Card style={{ minWidth: '300px', width: '300px', height: '350px' }}>
            <CardImg src={image.download_url} alt="" />
            <CardBody>
              <CardTitle>{image.author}</CardTitle>
              <CardText>{image.url}</CardText>
            </CardBody>
          </Card>

        )
      })}
    </StyledCard>
  )
}
const mapStateToProps = (state) => {
  return {
    images: state.data
  }
}
export default connect(mapStateToProps, {})(Photos)

// export default Photos