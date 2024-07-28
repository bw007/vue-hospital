import { default as axios } from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://195.158.9.124:4109',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default axiosClient