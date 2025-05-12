import api from '../axiosInstance'

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
