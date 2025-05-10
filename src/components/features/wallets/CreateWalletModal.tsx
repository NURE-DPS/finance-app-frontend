import { BaseWalletModal } from './BaseWalletModal'
import { ModalControl } from '../../../interfaces/Interfaces'
import { useCreateWallet } from '../../../hooks/wallets/useCreateWallet'

export const CreateWalletModal = ({ open, setOpen }: ModalControl) => {
  const { handleCreateWallet } = useCreateWallet(() => setOpen(false))

  return (
    <BaseWalletModal
      title="Add Wallet"
      open={open}
      setOpen={setOpen}
      onSave={handleCreateWallet}
    />
  )
}
