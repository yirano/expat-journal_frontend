import React, { useEffect } from "react"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap'
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
    <Card style={{width:"30%", height:"30%"}}>
      {images.map((image) => (
        <Link to={`/photos/${image.id}`}>
          <CardImg src={image.download_url} alt=""  />
      <CardBody>
        <CardTitle>Title:{image.author}</CardTitle>
        <CardText>Description:{image.url}</CardText>
        </CardBody>
        </Link>
      ))}
    </Card>
  )
}


  
const mapStateToProps = (state) => {
  return {
    images: state.data
  }
}

export default connect(mapStateToProps, { loadPosts })(Photos)

// export default Photos