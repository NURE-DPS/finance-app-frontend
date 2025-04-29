//import { useEffect, useState } from 'react'
import { WalletCard } from '../components/Wallets/WalletCard'
//import { fetchWallets } from '../api/walletsApi'
import { wallets } from '../stores/wallets'

export const Wallets = () => {
  //потом будет через useContext
  // const [wallets, setWallets] = useState<any[]>([])
  // const [loading, setLoading] = useState(true)

  //раскоментить после кнопок
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

  return (
    <div className="text-color h-screen">
      <h3 className=" w-full text-left text-h2 font-bold mb-8 pl-4 font-montserrat">
        My Wallets
      </h3>
      {/* стили прописать */}
      {/* {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-3 justify-center gap-8">
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
      )} */}
      {/* удалить после кнопок */}
      <div className="grid grid-cols-3 justify-center gap-8">
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
    </div>
  )
}
