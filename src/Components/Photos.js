import React, { useEffect } from "react"
import { connect } from 'react-redux'
import { loadPosts } from '../Action/action'
import PhotoCard from './PhotoCard'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import {Card, CardImg, CardTitle, CardText, CardDeck,CardBody} from 'reactstrap'
// import styled from 'styled-components'
// import Photo from './Photo'
// import { useState } from "react"

// const StyledCard = styled.div`
//   display: flex;
//  flex-wrap: wrap;
//   justify-content: space-around
//   flex-direction:row
// `

const StyledCardContainer = styled.div`
  display: flex;
 flex-wrap: wrap;
  justify-content: space-around;
  flex-direction:row
`;

const StyledCard = styled.div`
  width: 800px`;

const Photos = ({ images, loadPosts }) => {

  useEffect(() => {
    loadPosts()
  })

  return (
    <div>
    <StyledCardContainer>
      {images.map((image) => (
        <StyledCard>
          <Link to={`/photos/${image.id}`}>
            <PhotoCard image={image} key={image.id} />
          </Link>
        </StyledCard>
      ))}
    </StyledCardContainer>
  </div>
)
}
















const mapStateToProps = (state) => {
  return {
    images: state.data
  }
}

export default connect(mapStateToProps, { loadPosts })(Photos)
