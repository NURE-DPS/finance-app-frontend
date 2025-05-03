import { useState } from 'react'
//import { editWallet } from '../../api/walletsApi'
import { BaseWalletModal } from './BaseWalletModal'

export const EditWalletModal = ({
  defname,
  defcurr,
  defbalance,
  open,
  setOpen,
}) => {
  const [name, setName] = useState(defname)
  const [currency, setCurrency] = useState(defcurr)
  const [balance, setBalance] = useState(defbalance)

  const handleSave = () => {
    console.log({ name, currency, balance })
    //const createdWallet = editWallet({defid, name, currency, balance })
    setOpen(false)
  }

  return (
    <BaseWalletModal
      title="Edit Wallet"
      name={name}
      setName={setName}
      currency={currency}
      setCurrency={setCurrency}
      balance={balance}
      setBalance={setBalance}
      onSave={handleSave}
      open={open}
      setOpen={setOpen}
      showCancel
    />
  )
}
