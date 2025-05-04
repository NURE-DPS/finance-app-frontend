import { createContext } from 'react'
import { WalletType } from '../interfaces/Interfaces'

type WalletContextType = {
  wallets: WalletType[]
  selectedWalletId: string
  selectedWallet: WalletType | undefined
  setSelectedWalletId: (id: string) => void
}

export const WalletContext = createContext<WalletContextType | undefined>(
  undefined,
)
