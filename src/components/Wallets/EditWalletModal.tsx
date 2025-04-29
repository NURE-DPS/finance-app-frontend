import { useState } from 'react'
//import { editWallet } from '../../api/walletsApi'
import { WalletModal } from './WalletModal'
import { ChangeWalletModalProps } from '../../interfaces/ChangeWalletModalProps'

export const EditWalletModal = ({
  onClose,
  //defid,
  defname,
  defcurr,
  defbalance,
}: ChangeWalletModalProps) => {
  const [name, setName] = useState(defname)
  const [currency, setCurrency] = useState(defcurr)
  const [balance, setBalance] = useState(defbalance)

  const handleSave = () => {
    console.log({ name, currency, balance })
    //const createdWallet = editWallet({defid, name, currency, balance })
    onClose()
  }

  return (
    <WalletModal
      title="Edit Wallet"
      name={name}
      setName={setName}
      currency={currency}
      setCurrency={setCurrency}
      balance={balance}
      setBalance={setBalance}
      onClose={onClose}
      onSave={handleSave}
    />
  )
}
