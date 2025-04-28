import { useState } from 'react'
//import { createWallet } from '../api/walletsApi'
import { WalletModal } from './WalletModal'

export const CreateWalletModal = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState('')
  const [currency, setCurrency] = useState('EUR')
  const [balance, setBalance] = useState('0.00')

  const handleSave = () => {
    console.log({ name, currency, balance })
    //const createdWallet = createWallet({ name, currency, balance })
    onClose()
  }
  return (
    <WalletModal
      title="Add Wallet"
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
