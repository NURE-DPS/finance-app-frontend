import { WalletCard } from '../../components/features/wallets/WalletCard'
import { usePageTitle } from '../../hooks/usePageTitle'
import { useState, useEffect } from 'react'
import { LoadingCircleSpinner } from '../../components/UI/LoadingCircleSpinner'
import { useWallet } from '../../hooks/wallets/UseWallet'
// import { fetchWallets } from '../../api/wallets/walletsApi'

export const Wallets = () => {
  const { setTitle } = usePageTitle()
  const { wallets } = useWallet()

  const [loading, setLoading] = useState(true)

  //реализация связи с бэкэндом РАБОТАЕТ
  // useEffect(() => {
  //   fetchWallets()
  //     .then((response) => {
  //       setWallets(response.data)
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  //     .finally(() => {
  //       setLoading(false)
  //     })
  // }, [])

  useEffect(() => {
    setTitle('My Wallets')
    setLoading(false)
  }, [setTitle])

  return (
    <>
      {loading ? (
        <LoadingCircleSpinner />
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
