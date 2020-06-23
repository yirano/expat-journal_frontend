import React, { useEffect, Component } from "react"
import { connect } from 'react-redux'
import { loadPosts, spotLight } from '../Action/action'
import PhotoCard from './PhotoCard'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import axiosWithAuth from '../axiosWithAuth/axiosWithAuth'


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
const Photos = ({ images, loadPosts, isLoading, spotLight }) => {
  function remove() {
    alert("Are you sure want to delete this post")
  }

  useEffect(() => {
    loadPosts()
    console.log(images)
  }, [])

  const spotLightPhoto = id => {
    console.log('Spotlight --> ', id)
    spotLight(id)
  }

  return (
    <div>
      {!isLoading ?
        <StyledCardContainer>
          {console.log(images)}
          {images.map((image) => (
            <StyledCard id={image.id} onClick={() => spotLightPhoto(image.id)} >
              <Link to={`/photos/${image.id}`}>
                <PhotoCard image={image} key={image.id} height="580px" />
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

export default connect(mapStateToProps, { loadPosts, spotLight })(Photos)
