import { userCreateTransaction } from '../../../hooks/transactions/useCreateTransaction'
import { ModalControl } from '../../../interfaces/Interfaces'
import { BaseTransModal } from './BaseTransModal'

type CreateTransModalProps = ModalControl & {
  showWalletSelection?: boolean
  walletId?: string
}

export const CreateTransModal = ({
  open,
  setOpen,
  showWalletSelection = false,
  walletId,
}: CreateTransModalProps) => {
  const { handleCreateTransaction } = userCreateTransaction(() =>
    setOpen(false),
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
