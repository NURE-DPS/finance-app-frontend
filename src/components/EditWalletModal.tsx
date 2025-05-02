import { useState } from 'react'
//import { editWallet } from '../api/walletsApi'
import { WalletModal } from './WalletModal'
import type { EditWalletModalProps } from '../interfaces/ChangeWalletModalProps'

export const EditWalletModal = ({
  onClose,
  defname,
  defcurr,
  defbalance,
}: EditWalletModalProps) => {
  const [name, setName] = useState(defname)
  const [currency, setCurrency] = useState(defcurr)
  const [balance, setBalance] = useState(defbalance)

  const handleSave = () => {
    console.log({ name, currency, balance })
    //const createdWallet = editWallet({ name, currency, balance })
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
