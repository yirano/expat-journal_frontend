import React, { useEffect } from "react"
import { connect } from 'react-redux'
import { loadPosts } from '../Action/action'
import PhotoCard from './PhotoCard'
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

const Photos = ({ images, loadPosts }) => {

  useEffect(() => {
    loadPosts()
  })

  return (
    <>
      {images.map((image) => (<PhotoCard image={image} />))}
    </>
  )
}















const mapStateToProps = (state) => {
  return {
    images: state.data
  }
}

export default connect(mapStateToProps, { loadPosts })(Photos)
