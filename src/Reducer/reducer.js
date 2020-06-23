import {
  LOAD_POSTS,
  LOAD_POSTS_PUBLIC,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  PHOTO_SPOTLIGHT,
} from '../Action/action'
import { images } from '../DummyAPI/images'


const initialState = {
  data: [],
  isLoading: false,
  isLoggedIn: false,
  error: '',
  spotLight: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_POSTS:
      return { data: payload, isLoading: false, isLoggedIn: true, error: '', spotLight: images }
    case ADD_POST:
      return { ...state }
    case DELETE_POST:
      return { ...state }
    case EDIT_POST:
      return { ...state }
    case LOAD_POSTS_PUBLIC:
      return { ...state, IsLoggedIn: false }
    case PHOTO_SPOTLIGHT:
      return {
        ...state,
        spotLight: state.data.filter(d => d.id === payload.id)
      }
    default:
      return state
  }
}


