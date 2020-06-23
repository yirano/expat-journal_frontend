import axios from 'axios'

export default function axiosWithAuth() {
  const token = localStorage.getItem('token')

  return axios.create({
    baseURL: 'https://bwexpat-journal.herokuapp.com/api',
    headers: {
      Authorization: token
    }
  })
}