import React, { useEffect } from 'react'

import { useParams } from 'react-router'
import { connect } from 'react-redux'
import { spotLight } from '../Action/action'
import PhotoCard from './PhotoCard'

const Photo = (props) => {
  const paramID = useParams()
  useEffect(() => {
    props.spotLight(paramID)
  }, [])

  return (
    <>
      {props.image !== undefined ?
        <PhotoCard image={props.image} />
        : null
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    image: state.spotLight[0]
  }
}

export default connect(mapStateToProps, { spotLight })(Photo)