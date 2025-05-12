import api from '../axiosInstance'

export const createTransaction = (transactionData: {
  walletId: string
  categoryId?: number
  type: 'INCOME' | 'EXPENSE'
  amount: string
  currency: string
  description?: string,
  createdAt: Date
}) => {
  return api.post('/transactions', {
    ...transactionData,
    amount: Number.parseInt(transactionData.amount),
    type: transactionData.type.toUpperCase(),
    createdAt: transactionData.createdAt.toISOString(),
  })
}
