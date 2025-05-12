//import { editWallet } from '../../api/walletsApi'
import {
  ModalControl,
  WalletTypeNumberId,
  WalletTypeStringId,
} from '../../../interfaces/Interfaces'
import { BaseWalletModal } from './BaseWalletModal'

type ChangeWalletProps = ModalControl & WalletTypeNumberId

export const EditWalletModal = ({
  open,
  setOpen,
  id,
  name,
  currency,
  balance,
}: ChangeWalletProps) => {
  const handleSave = (data: WalletTypeStringId) => {
    console.log('New Data:', data)
    //const editedWallet = editWallet({id, name, currency, balance })
    setOpen(false)
  }

  return (
    <BaseWalletModal
      title="Edit Wallet"
      onSave={handleSave}
      open={open}
      setOpen={setOpen}
      defaultValues={{
        id: id,
        name: name,
        currency: currency,
        balance: balance.toString(),
      }}
      showCancel={true}
    />
  )
}
