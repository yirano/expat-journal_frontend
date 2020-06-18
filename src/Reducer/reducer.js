import {
  LOAD_POSTS_PRIVATE,
  LOAD_POSTS_PUBLIC,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
} from '../Action/action'

const initialState = {
  data: [],
  isLoading: false,
  isLoggedIn: false,
  error: '',
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_POSTS_PRIVATE:
      return { ...state, isLoggedIn: true }
    case ADD_POST:
      return { ...state }
    case DELETE_POST:
      return { ...state }
    case EDIT_POST:
      return { ...state }
    case LOAD_POSTS_PUBLIC:
      return { ...state, IsLoggedIn: false }
    default:
      return state
  }
}
