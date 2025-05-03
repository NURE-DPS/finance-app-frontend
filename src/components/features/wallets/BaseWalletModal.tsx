import { LuX } from 'react-icons/lu'
import { IconButton } from '../../UI/IconButton'
import { Modal } from '../../UI/Modal'
import { WalletForm } from './WalletForm'

interface WalletModalProps {
  title: string
  open: boolean
  setOpen: (value: boolean) => void
  onSave: (data: { name: string; currency: string; balance: string }) => void
  defaultValues?: {
    name: string
    currency: string
    balance: string
  }
  showCancel?: boolean
}

export const BaseWalletModal = ({
  title,
  open,
  setOpen,
  onSave,
  defaultValues,
  showCancel = false,
}: WalletModalProps) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-text-primary text-lg font-semibold font-montserrat">
          {title}
        </h2>
        <IconButton onClick={() => setOpen(false)} Icon={LuX} />
      </div>
      <WalletForm
        onSubmit={onSave}
        defaultValues={defaultValues}
        setOpen={setOpen}
        showCancel={showCancel}
      />
    </Modal>
  )
}
