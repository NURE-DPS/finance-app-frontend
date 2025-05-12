import {
  ModalControl,
  Transaction,
  TransactionType,
} from '../../../interfaces/Interfaces'
import { TransactionCategory } from '../../../stores/transactions'
import { BaseTransModal } from './BaseTransModal'

type EditTransModalProps = ModalControl & {
  walletId: string
  type: TransactionType
  amount: string
  description: string
  category: TransactionCategory | ''
  date: Date
}

export const EditTransModal = ({
  open,
  setOpen,
  walletId,
  type,
  amount,
  description,
  category,
  date,
}: EditTransModalProps) => {
  const handleSave = (data: Transaction) => {
    console.log('Edited transaction:', data)
    //const editedTransaction = editTransaction({ type, amount, description, category, date, walletId })
    setOpen(false)
  }
  return (
    <BaseTransModal
      title="Add Transaction"
      open={open}
      setOpen={setOpen}
      onSave={handleSave}
      defaultValues={{
        walletId: walletId,
        type: type,
        amount: amount,
        description: description,
        category: category,
        date: date,
      }}
      showCancel={true}
    />
  )
}
