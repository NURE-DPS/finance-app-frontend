import { toast } from "sonner"
import { deleteTransaction } from "../../api/transactions/transactionsApi"

export const useDeleteTransaction = () => {
  const handleDeleteTransaction = async (
    transactionId: string,
    onSuccess?: () => void,
  ) => {
    await toast.promise(deleteTransaction(transactionId), {
      loading: 'Deleting transaction...',
      success: () => {
        onSuccess?.()
        return 'Transaction deleted successfully!'
      },
      error: (error: any) => {
        const message =
          error.response?.data?.error ||
          error.response?.data?.message ||
          'Unexpected error while deleting transaction'
        return message
      },
    })
  }

  return { handleDeleteTransaction }
}
