import { WalletContext } from '../context/WalletContext'
import { wallets } from '../stores/wallets'
import type { ReactNode } from 'react'
import { useState } from 'react'

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [selectedWalletId, setSelectedWalletId] = useState<string>(
    wallets[0].id,
  )

  const selectedWallet = wallets.find(
    (wallet) => wallet.id === selectedWalletId,
  )

  return (
    <WalletContext.Provider
      value={{
        wallets,
        selectedWalletId,
        selectedWallet,
        setSelectedWalletId,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}
