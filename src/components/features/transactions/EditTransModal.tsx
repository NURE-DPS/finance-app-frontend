import { useEditTransaction } from '../../../hooks/transactions/useEditTransaction'
import {
  ModalControl,
  TransactionTypeNumberId,
  TransactionTypeStringId,
} from '../../../interfaces/Interfaces'
import { BaseTransModal } from './BaseTransModal'

type EditTransModalProps = ModalControl &
  TransactionTypeStringId & 
    {setTransactions: React.Dispatch<
      React.SetStateAction<TransactionTypeNumberId[]>
    >}

export const EditTransModal = ({
  open,
  setOpen,
  id,
  walletId,
  type,
  amount,
  description,
  categoryId,
  createdAt,
  currency,
  setTransactions,
}: EditTransModalProps) => {
  const { handleEditTransaction } = useEditTransaction(
    undefined,
    setTransactions,
  )

  const handleSave = (data: TransactionTypeStringId) => {
    handleEditTransaction(id, data)
    setOpen(false)
  }
  return (
    <BaseTransModal
      title="Edit Transaction"
      open={open}
      setOpen={setOpen}
      onSave={handleSave}
      defaultValues={{
        id: id,
        walletId: walletId,
        type: type,
        amount: amount,
        description: description,
        categoryId: categoryId,
        createdAt: createdAt,
        currency: currency,
      }}
      showCancel={true}
    />
  )
}
