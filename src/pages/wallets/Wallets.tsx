import { WalletCard } from '../../components/features/wallets/WalletCard'
import { usePageTitle } from '../../hooks/usePageTitle'
import { useEffect } from 'react'
import { LoadingCircleSpinner } from '../../components/UI/LoadingCircleSpinner'
import { useWallet } from '../../hooks/wallets/UseWallet'

export const Wallets = () => {
  const { setTitle } = usePageTitle()
  const { wallets, loading, error } = useWallet()

  useEffect(() => {
    setTitle('My Wallets')
  }, [setTitle])

  return (
    <>
      {loading ? (
        <LoadingCircleSpinner />
      ) : error ? (
        <div className="text-error mt-4">Error loading wallets.</div>
      ) : (
        <div className="grid grid-cols-3 justify-center gap-8 px-5">
          {wallets.map((wallet) => (
            <WalletCard
              key={wallet.id}
              id={wallet.id}
              name={wallet.name}
              balance={wallet.balance}
              currency={wallet.currency}
            />
          ))}
        </div>
      )}
    </>
  )
}
