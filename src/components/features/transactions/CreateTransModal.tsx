import { userCreateTransaction } from '../../../hooks/transactions/useCreateTransaction'
import { useWallet } from '../../../hooks/wallets/UseWallet'
import { ModalControl, Transaction } from '../../../interfaces/Interfaces'
import { BaseTransModal } from './BaseTransModal'
//import { createTransaction } from '../../../api/transactions/transApi'

//это нужно проверить при разработке связи с бэкэндом
//вариант такой - если мы открываем CreateTransModal с дашбоарда, то мы внутрь ничего не передаем
// и получаем walletId внутри формы, но если мы открываем CreateTransModal из страницы определенного кошелька,
//то мы просто передаем айди этого кошелька сюда и используем в handleSave
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
      defaultValues={{ walletId }}
    />
  )
}
