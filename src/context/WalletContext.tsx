import { createContext } from 'react'
import { WalletType } from '../interfaces/Interfaces'

//проверить работает ли interface вместо type для WalletType
type WalletContextType = {
  wallets: WalletType[]
  selectedWalletId: string
  selectedWallet: WalletType | undefined
  setSelectedWalletById: (id: string) => void
}

export const WalletContext = createContext<WalletContextType | undefined>(
  undefined,
)
