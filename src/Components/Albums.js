import React, { useEffect } from "react"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Card, CardImg, CardTitle, CardText, CardDeck,
  CardBody
} from 'reactstrap'
import { loadPosts } from '../Action/action'
import styled from 'styled-components'
import Photo from './Photo'
import { useState } from "react"
import PhotoCard from './PhotoCard'

const StyledCard = styled.div`
  display: flex;
 flex-wrap: wrap;
  justify-content: space-around
  flex-direction:row
`

const Albums = ({ images, loadPosts }) => {

  useEffect(() => {
    loadPosts()
  })

  return (
    <div>
      <StyledCard>
        {images.map((image) => (
          <Link to={`/photos/${image.id}`}>
            <PhotoCard image={image} key={image.id} />
          </Link>
        ))}
      </StyledCard>
    </div>
  )
}


{/*<CardDeck style={{display:"flex", flexDirection:"row", justifyContent:'center', width:"30%", height:"30%"}}>
<Card>
  {images.map((image) => (
    <Link to={`/photos/${image.id}`}>
      <CardImg src={image.download_url} alt=""  />
  <CardBody>
    <CardTitle>Title:{image.author}</CardTitle>
    <CardText>Description:{image.url}</CardText>
    </CardBody>
    </Link>
  ))}
</Card>
</CardDeck>
</div>
)
}*/}

const mapStateToProps = (state) => {
  return {
    images: state.data
  }
}

export default connect(mapStateToProps, { loadPosts })(Albums)

// export default Photos