import { userCreateTransaction } from '../../../hooks/transactions/useCreateTransaction'
import { ModalControl, TransactionTypeNumberId } from '../../../interfaces/Interfaces'
import { BaseTransModal } from './BaseTransModal'

type CreateTransModalProps = ModalControl & {
  showWalletSelection?: boolean
  walletId?: string
  setTransactions: React.Dispatch<
    React.SetStateAction<TransactionTypeNumberId[]>
  >
}

export const CreateTransModal = ({
  open,
  setOpen,
  showWalletSelection = false,
  walletId,
  setTransactions,
}: CreateTransModalProps) => {
  const { handleCreateTransaction } = userCreateTransaction(
    () => setOpen(false),
    setTransactions
  )

  return (
    <BaseTransModal
      title="Add Transaction"
      open={open}
      setOpen={setOpen}
      onSave={handleCreateTransaction}
      showWalletSelection={showWalletSelection}
      defaultValues={{ walletId }}
    />
  )
}
