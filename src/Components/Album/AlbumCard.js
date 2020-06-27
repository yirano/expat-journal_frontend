import React, { useEffect, useState } from 'react'
import { loadPosts } from '../../Action/action'
import { Card, CardText, CardBody, CardTitle, CardImg } from 'reactstrap'
import styled from 'styled-components'
import { connect } from 'react-redux'
import axiosWithAuth from '../../axiosWithAuth/axiosWithAuth'


const StyledImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: flex-end;
`
const AlbumCard = ({ album }) => {
  const [coverImg, setCoverImg] = useState(require('../../Images/no_image.jpg'))

  useEffect(() => {
    axiosWithAuth().get(`stories/${album.id}/photos`)
      .then(res => {
        setCoverImg(res.data[0].photo_url)
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Card style={{ display: 'flex' }}>
      <StyledImageContainer style={{ height: '500px', width: '100%' }}>
        <CardImg src={coverImg} style={{ minHeight: '100%' }} />
      </StyledImageContainer>
      <CardBody>
        <CardTitle>Title: {album.story_name}</CardTitle>
        <CardText>Description: {album.story_description}</CardText>
      </CardBody>
    </Card>

  )
}

const mapStateToProps = (state) => {
  return {
    stuff: state.data
  }
}

export default connect(mapStateToProps, { loadPosts })(AlbumCard)
