import { WalletContext } from '../context/WalletContext'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { WalletTypeNumberId } from '../interfaces/Interfaces'
import { fetchWallets } from '../api/wallets/walletsApi'

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [wallets, setWallets] = useState<WalletTypeNumberId[]>([])
  const [selectedWalletId, setSelectedWalletId] = useState<string>(
    wallets[0]?.id,
  )
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    const loadWallets = async () => {
      try {
        const response = await fetchWallets()
        setWallets(response.data)
        setError(null)
      } catch (err) {
        console.error(err)
        setError('Failed to load wallets')
      } finally {
        setLoading(false)
      }
    }

    loadWallets()
  }, [])

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
        loading,
        error,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}
