import React, { useEffect } from "react"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadAlbums, removeAlbum } from '../Action/action'
import styled from 'styled-components'
import { Button } from 'reactstrap'
import AlbumCard from './AlbumCard'

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
const StyledAlbum = styled.div`
  display: flex;
  flex-direction: column;
  width: 24%;
  min-width: 500px;
  height: 600px;
`

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Albums = (props) => {
  const remove = (e) => {
    props.removeAlbum(e.target.id)
  }
  useEffect(() => {
    const id = localStorage.getItem('id')
    props.loadAlbums(id)
  }, [])
  console.log('Rendered albums --> ', props.albums)


  return (
    <StyledCardContainer>
      {props.albums !== undefined ? props.albums.map((album) => (
        <StyledAlbum>
          <Link to={`/albums/${album.id}`}>
            <AlbumCard album={album} />
          </Link>
          <StyledButtonContainer>
            <Link to={`/album/${album.id}/post`}>
              <Button style={{ marginLeft: "2%", height: '40px' }} id={album.id} >Add to Album</Button>
            </Link>
            <Link to={`/album/edit/${album.id}`}>
              <Button style={{ marginLeft: "2%", height: '40px' }} id={album.id}>Edit Album</Button>
            </Link>
            <Button style={{ marginLeft: "2%", height: '40px' }} id={album.id} onClick={e => remove(e)}>Delete</Button>
          </StyledButtonContainer>
        </StyledAlbum>
      )) : null}
    </StyledCardContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    albums: state.albumData || []
  }
}

export default connect(mapStateToProps, { loadAlbums, removeAlbum })(Albums)