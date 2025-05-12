import { createContext, Dispatch, SetStateAction } from 'react'
import { WalletType } from '../interfaces/Interfaces'
import { Wallet } from '../providers/WalletProvider'

type WalletContextType = {
  wallets: WalletType[]
  setWallets: Dispatch<SetStateAction<Wallet[]>>
  selectedWalletId: string
  selectedWallet: WalletType | undefined
  setSelectedWalletId: (id: string) => void
}

export const WalletContext = createContext<WalletContextType | undefined>(
  undefined,
)
