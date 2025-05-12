import { TransactionTypeNumber } from '../../interfaces/Interfaces'
import api from '../axiosInstance'

export const createTransaction = (transactionData: TransactionTypeNumber) => {
  return api.post('/transactions', {
    ...transactionData,
    //type: transactionData.type.toUpperCase(),
    createdAt: transactionData.createdAt.toISOString(),
  })
}
