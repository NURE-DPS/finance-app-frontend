import { userCreateTransaction } from '../../../hooks/transactions/useCreateTransaction'
import { useWallet } from '../../../hooks/wallets/UseWallet'
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
  const { handleCreateTransaction } = userCreateTransaction(
    () => setOpen(false),
  )
  

  return (
    <BaseTransModal
      title="Add Transaction"
      open={open}
      setOpen={setOpen}
      onSave={handleCreateTransaction}
      showWalletSelection={showWalletSelection}
    />
  )
}
