//import { editWallet } from '../../api/walletsApi'
import { BaseWalletModal } from './BaseWalletModal'
import { OpenModal } from '../../../interfaces/Interfaces'
import { useWallet } from '../../../hooks/UseWallet'

export const EditWalletModal = ({ open, setOpen }: OpenModal) => {
  const { selectedWallet } = useWallet()

  if (!selectedWallet) return null

  const handleSave = (
    id: string,
    data: {
      name: string
      currency: string
      balance: string
    },
  ) => {
    console.log('Edit wallet:', id, 'New Data:', data)
    //const editedWallet = editWallet({id, name, currency, balance })
    setOpen(false)
  }

  return (
    <BaseWalletModal
      title="Edit Wallet"
      onSave={(data) => handleSave(selectedWallet.id, data)}
      open={open}
      setOpen={setOpen}
      defaultValues={{
        name: selectedWallet.name,
        currency: selectedWallet.currency,
        balance: selectedWallet.balance.toString(),
      }}
      showCancel={true}
    />
  )
}
