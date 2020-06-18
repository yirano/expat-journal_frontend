import { LOAD_POSTS, ADD_POST, DELETE_POST, EDIT_POST } from '../Action/action'

const initialState = {
  data: [],
  isLoading: false,
  error: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case LOAD_POSTS:
      return { ...state, ...payload }
    case ADD_POST:
      return { ...state, ...payload }
    case DELETE_POST:
      return { ...state, ...payload }
    case EDIT_POST:
      return { ...state, ...payload }
    default:
      return state
  }
}
