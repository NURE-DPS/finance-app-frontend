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
  const handleSave = (data: Transaction) => {
    console.log('Created transaction:', data)
    //const createdTransaction = createTransaction({ type, amount, description, category, date, walletId })
    setOpen(false)
  }

  return (
    <BaseTransModal
      title="Add Transaction"
      open={open}
      setOpen={setOpen}
      onSave={handleSave}
      showWalletSelection={showWalletSelection}
      defaultValues={{ walletId }}
    />
  )
}
