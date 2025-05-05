import axios from 'axios'
import { getToken /*,  removeToken */ } from '../utils/auth'

const api = axios.create({
  // baseURL: 'http://localhost:8000/api',
  baseURL: 'https://finance-app-backend-dev.onrender.com/api',
})

api.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// api.interceptors.response.use(
//   (res) => res,
//   (error) => {
//     if (error.response?.status === 401) {
//       removeToken()
//       window.location.href = '/login'
//     }
//     return Promise.reject(error)
//   },
// )

export default api
