import React, { useEffect } from "react"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadPosts } from '../Action/action'
import styled from 'styled-components'
import PhotoCard from './PhotoCard'
import {Button} from 'reactstrap'

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction:row
`

const StyledCard = styled.div`
  width: 30%;
  margin:20px;
`
function remove() {
  alert("Are you sure want to delete this post");
}


const Albums = ({ images, loadPosts}) => {
  function remove() {
    alert("Are you sure want to delete this post");
  }
  useEffect(() => {
    loadPosts()
  })
  

  return (
    <div>
      <StyledCardContainer>
        {images.map((image) => (
          <StyledCard>
            <PhotoCard image={image} key={image.id} height="380px" />
            <Link to={`/photos/${image.id}`}>
            <Button style={{marginLeft:"2%"}}>View Story</Button> 
            </Link>
            <Link to="/Edit">
            <Button style={{marginLeft:"2%"}}>Edit</Button>
              </Link>
             
            <Button style={{marginLeft:"2%"}} onClick={remove}>Delete</Button>
             
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