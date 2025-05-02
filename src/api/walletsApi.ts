import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
})

api.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
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
  balance: string
}) => {
  return api.post('/wallets', walletData)
}

export const fetchWallets = () => {
  return api.get('/wallets')
}

export default api

function getToken() {
  return 'temp'
  // throw new Error('Function not implemented.')
}
