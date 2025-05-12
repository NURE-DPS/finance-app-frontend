import { LuX } from 'react-icons/lu'
import { IconButton } from '../../UI/IconButton'
import { Modal } from '../../UI/Modal'
import { TransactionForm } from './TransactionForm'
import { TransactionTypeStringId } from '../../../interfaces/Interfaces'

interface TransModalProps {
  title: string
  open: boolean
  setOpen: (value: boolean) => void
  onSave: (data: TransactionTypeStringId) => void
  defaultValues?: Partial<TransactionTypeStringId>
  showCancel?: boolean
  showWalletSelection?: boolean
}

export const BaseTransModal = ({
  title,
  open,
  setOpen,
  onSave,
  defaultValues,
  showCancel = false,
  showWalletSelection = false,
}: TransModalProps) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-text-primary text-lg font-semibold font-montserrat">
          {title}
        </h2>
        <IconButton onClick={() => setOpen(false)} Icon={LuX} />
      </div>
      <TransactionForm
        onSubmit={onSave}
        defaultValues={defaultValues}
        setOpen={setOpen}
        showCancel={showCancel}
        showWalletSelection={showWalletSelection}
      />
    </Modal>
  )
}
