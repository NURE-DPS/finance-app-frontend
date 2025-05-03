import { useState } from 'react'
//import { createWallet } from '../../api/walletsApi'
import { BaseWalletModal } from './BaseWalletModal'

export const CreateWalletModal = ({ open, setOpen }) => {
  const [name, setName] = useState('')
  const [currency, setCurrency] = useState('EUR')
  const [balance, setBalance] = useState('0.00')

  const handleSave = () => {
    console.log({ name, currency, balance })
    //const createdWallet = createWallet({ name, currency, balance })
    setOpen(false)
  }
  return (
    <BaseWalletModal
      title="Add Wallet"
      name={name}
      setName={setName}
      currency={currency}
      setCurrency={setCurrency}
      balance={balance}
      setBalance={setBalance}
      open={open}
      setOpen={setOpen}
      onSave={handleSave}
    />
  )
}
