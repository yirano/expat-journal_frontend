import React, { useState, useEffect } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap'
import { useParams } from 'react-router'
import { connect } from 'react-redux'
import { spotLight } from '../Action/action'

const Photo = (props) => {
  const paramID = useParams()
  useEffect(() => {
    props.spotLight(paramID)
  }, [])
  return (
    <>
      {props.image !== undefined ?
        <Card style={{ minWidth: '300px', width: '500px', height: '450px' }}>
          <CardImg src={props.image.download_url} alt="" />
          <CardBody>
            <CardTitle>{props.imageauthor}</CardTitle>
            <CardText>{props.image.url}</CardText>
          </CardBody>
        </Card>
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

// export default Photo
