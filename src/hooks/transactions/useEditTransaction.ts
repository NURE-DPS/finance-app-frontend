import { toast } from 'sonner'
import { editTransaction } from '../../api/transactions/transactionsApi'
import {
  TransactionTypeString,
  TransactionTypeNumberId,
} from '../../interfaces/Interfaces'

export const useEditTransaction = (
  onSuccess?: () => void,
  setTransactions?: React.Dispatch<
    React.SetStateAction<TransactionTypeNumberId[]>
  >,
) => {
  const handleEditTransaction = async (
    transactionId: string,
    data: TransactionTypeString,
  ) => {
    const updatedData = {
      walletId: data.walletId,
      categoryId: data.categoryId,
      type: data.type,
      amount: data.amount,
      currency: data.currency,
      description: data.description,
      createdAt: data.createdAt,
    }

    await toast.promise(
      editTransaction(transactionId, updatedData).then((res) => {
        const updatedTransaction = res.data

        if (setTransactions) {
          setTransactions((prev) =>
            prev.map((t) =>
              t.id.toString() === transactionId ? updatedTransaction : t,
            ),
          )
        }

        onSuccess?.()
      }),
      {
        loading: 'Updating transaction...',
        success: 'Transaction updated successfully!',
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
