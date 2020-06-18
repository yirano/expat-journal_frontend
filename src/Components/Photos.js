import React, { useState } from "react"

import { connect } from 'react-redux'
import styled from 'styled-components'
import Photo from './Photo'

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
          <Photo image={image} />
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