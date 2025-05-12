import { createContext, Dispatch, SetStateAction } from 'react'
import { WalletTypeNumberId } from '../interfaces/Interfaces'

type WalletContextType = {
  wallets: WalletTypeNumberId[]
  setWallets: Dispatch<SetStateAction<WalletTypeNumberId[]>>
  selectedWalletId: string
  selectedWallet: WalletTypeNumberId | undefined
  setSelectedWalletId: (id: string) => void
}

export const WalletContext = createContext<WalletContextType | undefined>(
  undefined,
)
