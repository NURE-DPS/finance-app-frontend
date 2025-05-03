//import { useEffect, useState } from 'react'
import { WalletCard } from '../../components/features/wallets/WalletCard'
//import { fetchWallets } from '../api/walletsApi'
import { wallets } from '../../stores/wallets'
import { usePageTitle } from '../../hooks/usePageTitle'
import { useState, useEffect } from 'react'
import { LoadingCircleSpinner } from '../../components/UI/LoadingCircleSpinner'
// import { fetchWallets } from '../../api/wallets/walletsApi'

export const Wallets = () => {
  const { setTitle } = usePageTitle()
  //потом будет через useContext
  // const [wallets, setWallets] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  //раскоментить после кнопок РАБОТАЕТ
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
