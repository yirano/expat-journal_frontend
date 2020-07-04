import React, { useEffect } from 'react'

import { useParams } from 'react-router'
import { connect } from 'react-redux'
import { spotLight } from '../../Action/action'
import PhotoCard from './PhotoCard'
import styled from 'styled-components'


const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction:row;
  align-items:center;
`

const StyledCard = styled.div`
  width: 800px`

const Photo = (props) => {
  const paramID = useParams()
  useEffect(() => {
    props.spotLight(paramID.id)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
      <StyledCardContainer>
        <StyledCard>
          {props.image ?
            <PhotoCard image={props.image} />
            : null
          }
        </StyledCard>
      </StyledCardContainer>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    image: state.spotLight
  }
}

export default connect(mapStateToProps, { spotLight })(Photo)