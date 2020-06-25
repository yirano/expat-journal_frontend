import {
  LOAD_POSTS,
  LOG_OUT,
  PHOTO_SPOTLIGHT,
  DATA_LOADING,
  LOAD_ALBUMS,
} from '../Action/action'

const initialState = {
  data: [],
  albumData: [],
  error: '',
  spotLight: [],
  isLoggedIn: false,
  isLoading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DATA_LOADING:
      return { ...state, isLoading: payload }
    case LOAD_POSTS:
      return { data: payload, error: '', isLoggedIn: true, isLoading: false }
    case LOG_OUT:
      return { ...state, isLoggedIn: payload }
    case PHOTO_SPOTLIGHT:
      return {
        ...state,
        isLoggedIn: true,
        spotLight: payload
      }
    case LOAD_ALBUMS:
      // console.log('REDUCER -> LOAD_ALBUMS ', payload)
      return { ...state, albumData: payload, error: '', spotLight: state.spotLight, isLoggedIn: true, isLoading: false }
    default:
      return state
  }
}


