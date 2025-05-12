import { toast } from 'sonner'
import { createTransaction } from '../../api/transactions/transactionsApi'
import { Transaction } from '../../interfaces/Interfaces'

export const userCreateTransaction = (onSuccess?: () => void) => {
  
  const handleCreateTransaction = async (data: Transaction) => {
    
    console.log({
      ...data,
      amount: Number.parseInt(data.amount),
      type: data.type.toUpperCase(),
      createdAt: data.createdAt.toISOString(),
    })
    await toast.promise(
      createTransaction({
        walletId: data.walletId,
        categoryId: data.categoryId,
        type: data.type,
        amount: data.amount,
        currency: data.currency,
        description: data.description,
        createdAt: data.createdAt,
      }),
      {
        loading: 'Creating transaction...',
        success: () => {
          onSuccess?.()
          return 'Transaction created successfully!'
        },
        error: (error: any) => {
          const message =
            error.response?.data?.error ||
            error.response?.data?.message ||
            'Unexpected error while creating transaction'
          return message
        },
      },
    )
  }

  return {handleCreateTransaction}
}
