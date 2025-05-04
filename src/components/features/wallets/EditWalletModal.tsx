//import { editWallet } from '../../api/walletsApi'
import { ChangeWalletProps } from '../../../interfaces/Interfaces'
import { BaseWalletModal } from './BaseWalletModal'

export const EditWalletModal = ({
  open,
  setOpen,
  id,
  name,
  currency,
  balance,
}: ChangeWalletProps) => {
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
      onSave={(data) => handleSave(id, data)}
      open={open}
      setOpen={setOpen}
      defaultValues={{
        name: name,
        currency: currency,
        balance: balance.toString(),
      }}
      showCancel={true}
    />
  )
}
