import { WalletContext } from '../context/WalletContext'
import type { ReactNode } from 'react'
import { useState } from 'react'
import { WalletTypeNumberId } from '../interfaces/Interfaces'

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [wallets, setWallets] = useState<WalletTypeNumberId[]>([])
  const [selectedWalletId, setSelectedWalletId] = useState<string>(
    wallets[0]?.id,
  )

  const selectedWallet = wallets.find(
    (wallet) => wallet.id === selectedWalletId,
  )

  return (
    <WalletContext.Provider
      value={{
        wallets,
        setWallets,
        selectedWalletId,
        selectedWallet,
        setSelectedWalletId,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}
