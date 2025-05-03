import axios from 'axios'
import { getToken } from '../../utils/auth'

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
})

api.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token!) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export const createWallet = (walletData: {
  name: string
  currency: string
  balance: number
}) => {
  return api.post('/wallets', walletData)
}

export const fetchWallets = () => {
  return api.get('/wallets')
}

export default api
