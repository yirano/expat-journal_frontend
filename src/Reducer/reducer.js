import {
  LOAD_POSTS,
  LOG_OUT,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
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
    // case ADD_POST:
    //   return { ...state, isLoggedIn: true }
    // case DELETE_POST:
    //   return { ...state, isLoggedIn: true }
    // case EDIT_POST:
    //   return { ...state, isLoggedIn: true }
    case LOG_OUT:
      return { ...state, isLoggedIn: payload }
    case PHOTO_SPOTLIGHT:
      return {
        ...state,
        spotLight: payload
      }
    default:
      return state
  }
}


