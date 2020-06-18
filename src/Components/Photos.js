import React, { useState, useEffect } from "react"
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { loadPosts } from '../Action/action'
import Photo from './Photo'

const StyledCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Photos = ({ images, loadPosts }) => {

  useEffect(() => {
    loadPosts()
  })

  return (
    <StyledCard>
      {images.map((image) => (
        <Link to={`/photos/${image.id}`}>
          <Photo image={image} key={image.id} />
        </Link>
      ))}
    </StyledCard>
  )
}
const mapStateToProps = (state) => {
  return {
    images: state.data
  }
}
export default connect(mapStateToProps, { loadPosts })(Photos)

// export default Photos