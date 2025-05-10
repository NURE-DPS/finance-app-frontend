import { ModalControl, Transaction } from '../../../interfaces/Interfaces'
import { BaseTransModal } from './BaseTransModal'
//import { createTransaction } from '../../../api/transactions/transApi'

type CreateTransModalProps = ModalControl & {
  showWalletSelection?: boolean
}

export const CreateTransModal = ({
  open,
  setOpen,
  showWalletSelection = false,
}: CreateTransModalProps) => {
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
      showWalletSelection={showWalletSelection}
    />
  )
}
