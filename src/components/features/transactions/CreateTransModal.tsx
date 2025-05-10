import { ModalControl, Transaction } from '../../../interfaces/Interfaces'
import { BaseTransModal } from './BaseTransModal'
//import { createTransaction } from '../../../api/transactions/transApi'

export const CreateTransModal = ({ open, setOpen }: ModalControl) => {
  const handleSave = (data: Transaction) => {
    console.log('Created transaction:', data)
    //const createdTransaction = createTransaction({ type, amount, description, category, date })
    setOpen(false)
  }

  return (
    <BaseTransModal
      title="Add Transaction"
      open={open}
      setOpen={setOpen}
      onSave={handleSave}
    />
  )
}
