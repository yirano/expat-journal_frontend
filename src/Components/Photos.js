import React, { useEffect, Component } from "react"
import { connect } from 'react-redux'
import { loadPosts } from '../Action/action'
import PhotoCard from './PhotoCard'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'


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
// function remove() {
//   alert("Are you sure want to delete this post")
// }
const Photos = ({ images, loadPosts, isLoading }) => {
  function remove() {
    alert("Are you sure want to delete this post")
  }

  useEffect(() => {
    loadPosts()
    console.log(images)
  }, [])

  return (
    <div>
      {!isLoading ?
        <StyledCardContainer>
          {console.log(images)}
          {images.map((image) => (
            <StyledCard>
              <PhotoCard image={image} key={image.id} height="580px" />
              <Link to={`/photos/${image.id}`}>
                <Button style={{ marginLeft: "10%" }}>View Story</Button>
              </Link>
              <Link to="/Edit">
                <Button style={{ marginLeft: "10%" }}>Edit</Button>
              </Link>

              <Button style={{ marginLeft: "10%" }} onClick={remove}>Delete</Button>

            </StyledCard>
          ))}
        </StyledCardContainer>
        : <h1>LOADING</h1>}
    </div>
  )
}



const mapStateToProps = (state) => {
  return {
    images: state.data,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, { loadPosts })(Photos)
