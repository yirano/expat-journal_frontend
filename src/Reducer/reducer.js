import {
  LOAD_POSTS,
  LOG_OUT,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  PHOTO_SPOTLIGHT,
} from '../Action/action'
import { images } from '../DummyAPI/images'


const initialState = {
  data: [],
  error: '',
  spotLight: '',
  isLoggedIn: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_POSTS:
      return { data: payload, isLoggedIn: false, error: '', spotLight: images }
    case ADD_POST:
      return { ...state, isLoggedIn: true }
    case DELETE_POST:
      return { ...state, isLoggedIn: true }
    case EDIT_POST:
      return { ...state, isLoggedIn: true }
    case LOG_OUT:
      return { ...state, isLoggedIn: payload }
    case PHOTO_SPOTLIGHT:
      return {
        ...state,
        spotLight: state.data.filter(d => d.id === payload.id)
      }
    default:
      return state
  }
}


