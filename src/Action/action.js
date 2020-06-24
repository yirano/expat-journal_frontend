import axios from 'axios'
import axiosWithAuth from '../axiosWithAuth/axiosWithAuth'
import { useState } from 'react'

export const EDIT_POST = 'EDIT_POST'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const LOG_OUT = 'LOG_OUT'
export const LOAD_POSTS = 'LOAD_POSTS'
export const PHOTO_SPOTLIGHT = 'PHOTO_SPOTLIGHT'
export const DATA_LOADING = 'DATA_LOADING'


export const logIn = (credentials) => dispatch => {
  axios.post('https://expat-journal2.herokuapp.com/api/auth/login', credentials)
    .then(res => {
      console.log('Log in success --> ', res)
      localStorage.setItem('id', res.data.id)
      localStorage.setItem('token', res.data.token)
      window.location.reload()
    })
    .catch(err => console.log('Error logging in -->', err.response))
}

export const logOut = () => dispatch => {
  localStorage.removeItem('token')
  localStorage.removeItem('id')

  dispatch({ type: LOG_OUT, payload: false })
}

export const loadPosts = (id) => dispatch => {
  axiosWithAuth().get(`/stories/${id}/photos`)
    .then(res => {
      dispatch({ type: LOAD_POSTS, payload: res.data })
    })
    .catch(err => {
      console.log('Error while fetching data --> ', err.response)
    })
}

export const addPost = (post, id) => dispatch => {
  console.log('addPost id --> ', id)
  axiosWithAuth().post(`/stories/${id}/photos`, post)
    .then(res => console.log('Post Successful --> ', res))
    .catch(err => console.log('Post error --> ', err.response))
}

export const spotLight = (id) => dispatch => {
  axiosWithAuth().get(`/photos/${id}`)
    .then(res => {
      console.log('ACTION --> spotLight --> ', res)
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