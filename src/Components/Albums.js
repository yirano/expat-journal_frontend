import React, { useEffect } from "react"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadPosts } from '../Action/action'
import styled from 'styled-components'
import PhotoCard from './PhotoCard'

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction:row
`

const StyledCard = styled.div`

  width: 30%;
  
  
`

const Albums = ({ images, loadPosts }) => {

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

export default connect(mapStateToProps, { loadPosts })(Albums)

// export default Photos