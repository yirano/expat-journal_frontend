import axios from 'axios'
import axiosWithAuth from '../axiosWithAuth/axiosWithAuth'

export const EDIT_POST = 'EDIT_POST'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const LOG_OUT = 'LOG_OUT'
export const LOAD_POSTS = 'LOAD_POSTS'
export const PHOTO_SPOTLIGHT = 'PHOTO_SPOTLIGHT'
export const DATA_LOADING = 'DATA_LOADING'

export const logIn = (credentials) => dispatch => {
  // dispatch({ type: DATA_LOADING, payload: true })
  axios.post('https://expat-journal2.herokuapp.com/api/auth/login', credentials)
    .then(res => {
      console.log('Log in success --> ', res)
      localStorage.setItem('token', res.data.token)
      dispatch({ type: DATA_LOADING, payload: false })
      window.location.reload(true)
    })
    .catch(err => console.log('Error logging in -->', err.response))
}

export const logOut = () => dispatch => {
  localStorage.removeItem('token')
  // window.location.reload(true)
  dispatch({ type: LOG_OUT, payload: false })
}

export const loadPosts = () => dispatch => {
  axiosWithAuth().get('/stories/2/photos')
    .then(res => {
      dispatch({ type: LOAD_POSTS, payload: res.data })
    })
    .catch(err => {
      console.log('Error while fetching data --> ', err.response)
    })
}

export const addPost = (post) => dispatch => {
  axiosWithAuth().post('/stories/2/photos', post)
    .then(res => console.log('Post Successful --> ', res))
    .catch(err => console.log('Post error --> ', err.response))
}

export const spotLight = (id) => dispatch => {
  axiosWithAuth().get(`/photos/${id}`)
    .then(res => {
      console.log(res)
      dispatch({ type: PHOTO_SPOTLIGHT, payload: res.data })
    })
    .catch(err => console.log('Spotlight error --> ', err.response))
}

export const deletePhoto = (id) => dispatch => {
  console.log('Delete Photo Action ID --> ', id)
  axiosWithAuth().delete(`/photos/${id}`)
    .then(res => {
      console.log('Delete successful --> ', res)
      window.location.reload(true)
    })
    .catch(err => console.log('Error deleting --> ', err.response))
}