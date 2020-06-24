import {
  LOAD_POSTS,
  LOG_OUT,
  PHOTO_SPOTLIGHT,
  DATA_LOADING,
} from '../Action/action'

const initialState = {
  data: [],
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
    default:
      return state
  }
}


