import React, { useEffect } from "react"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import styled from 'styled-components'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap'
import { loadPosts } from '../Action/action'
import PhotoCard from './PhotoCard'
// import Photo from './Photo'

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
