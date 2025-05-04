//import { createWallet } from '../../api/walletsApi'
import { BaseWalletModal } from './BaseWalletModal'
import { OpenModal } from '../../../interfaces/Interfaces'

export const CreateWalletModal = ({ open, setOpen }: OpenModal) => {
  const handleSave = (data: {
    name: string
    currency: string
    balance: string
  }) => {
    console.log('Created wallet:', data)
    //const createdWallet = createWallet({ name, currency, balance })
    setOpen(false)
  }
  return (
    <BaseWalletModal
      title="Add Wallet"
      open={open}
      setOpen={setOpen}
      onSave={handleSave}
    />
  )
}
