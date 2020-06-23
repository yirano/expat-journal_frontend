import React, { useEffect, useState } from "react"
import { connect } from 'react-redux'
import { loadPosts } from '../Action/action'
import PhotoCard from './PhotoCard'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'



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
`

const StyledCard = styled.div`
  width: 800px;
  margin:20px;
`
const Photos = (props) => {
  useEffect(() => {
    props.loadPosts()
    console.log(props.images)
  }, [])

  return (
    <div>
      <StyledCardContainer>
        {console.log(props.images)}
        {props.images.map((image) => (
          <StyledCard>
            <PhotoCard image={image} key={image.id} height="580px" />
            <Link to={`/photos/${image.id}`}>
              <Button>View Story</Button>
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
