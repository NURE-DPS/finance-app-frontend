import {
  TransactionTypeNumber,
  TransactionTypeString,
} from '../../interfaces/Interfaces'
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

export const deleteTransaction = (transactionId: string) => {
  return api.delete(`/transactions/${transactionId}`)
}

export const editTransaction = async (
  transactionId: string,
  data: Partial<TransactionTypeString>,
) => {
  const formattedData = {
    ...data,
    createdAt: data.createdAt?.toISOString(),
  }

  return await api.patch(`/transactions/${transactionId}`, formattedData)
}