import React, { useEffect } from "react"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadAlbums, removeAlbum } from '../Action/action'
import styled from 'styled-components'
import { Button } from 'reactstrap'
import AlbumCard from './AlbumCard'

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction:column
`

const Albums = (props) => {
  const remove = (e) => {
    props.removeAlbum(e.target.id)
  }
  useEffect(() => {
    const id = localStorage.getItem('id')
    props.loadAlbums(id)
  }, [])
  console.log(props.albums)
  return (
    <div>
      <StyledCardContainer>
        {props.albums.map((album) => (
          <>
            <Link to={`/album/${album.id}`}>
              <AlbumCard album={album} />
            </Link>
            <Button style={{ marginLeft: "2%", height: '40px' }} id={album.id} onClick={e => remove(e)}>Delete</Button>
          </>
        ))}
      </StyledCardContainer>
    </div >
  )
}

const mapStateToProps = (state) => {
  return {
    albums: state.albumData
  }
}

export default connect(mapStateToProps, { loadAlbums, removeAlbum })(Albums)