import { toast } from 'sonner'
import { editTransaction } from '../../api/transactions/transactionsApi'
import { TransactionTypeString } from '../../interfaces/Interfaces'

export const useEditTransaction = (onSuccess?: () => void) => {
  const handleEditTransaction = async (
    transactionId: string,
    data: Partial<TransactionTypeString>,
  ) => {
    await toast.promise(
      editTransaction(transactionId, data),
      {
        loading: 'Updating transaction...',
        success: () => {
          onSuccess?.()
          return 'Transaction updated successfully!'
        },
        error: (error: any) => {
          const message =
            error.response?.data?.error ||
            error.response?.data?.message ||
            'Unexpected error while updating transaction'
          return message
        },
      },
    )
  }

  return { handleEditTransaction }
}
