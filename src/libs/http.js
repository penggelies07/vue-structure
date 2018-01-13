import axios from 'axios'
import * as jwt from '../jwt'

const API_HOST = process.env.API_HOST
const NODE_ENV = process.env.NODE_ENV

const instance = axios.create({baseURL: API_HOST})

instance.interceptors.request.use(function (config) {
  const token = jwt.get()
  if (token) config.headers.common['Authorization'] = `Bearer ${token}`
  const url = config.url.replace(config.baseURL, '')
  if (NODE_ENV === 'development') {
    const json = config.data ? JSON.stringify(config.data) : ''
    console.log(`[${config.method}] ${url} ${json}`)
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  const data = response.data
  if (data.success) return Promise.resolve(data)
  else if (data.success === false) {
    // window.alert(data.msg)
    throw new Error(data.msg)
  }
  return Promise.resolve(response)
}, function (error) {
  // window.alert(JSON.stringify(error.response))
  return Promise.reject(error)
})

export default instance
