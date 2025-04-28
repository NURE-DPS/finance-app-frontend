import { WalletCard } from '../components/WalletCard'
import { wallets } from '../stores/wallets'

export const Wallets = () => {
  return (
    <div className="text-color h-screen">
      <h3 className=" w-full text-left text-h2 font-bold mb-8 pl-4 font-montserrat">
        My Wallets
      </h3>
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
