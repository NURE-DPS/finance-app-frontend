import { TransactionTypeNumber } from '../../interfaces/Interfaces'
import api from '../axiosInstance'

export const createTransaction = (transactionData: TransactionTypeNumber) => {
  return api.post('/transactions', {
    ...transactionData,
    //type: transactionData.type.toUpperCase(),
    createdAt: transactionData.createdAt.toISOString(),
  })
}

export const fetchTransactions = (walletId?: string) => {
  const query = walletId ? `?walletId=${walletId}` : '?page=1&limit=20'
  return api.get(`/transactions${query}`)
}
