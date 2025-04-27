import { ShowWallet } from '../components/ShowWallet'
import { wallets } from '../stores/wallets'

export const Wallets = () => {
  return (
    <div className="p-8">
      <h3 className="text-h2 font-bold mb-8 text-center text-color font-montserrat">
        My Wallets
      </h3>
      <div className="grid grid-cols-3 justify-center gap-8">
        {wallets.map((wallet) => (
          <ShowWallet
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
