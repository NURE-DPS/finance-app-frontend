import { Link } from 'react-router-dom'

type WalletProps = {
  id: string
  name: string
  balance: number
  currency: string
}

export const WalletCard = ({ id, name, balance, currency }: WalletProps) => {
  return (
    <Link
      to={`/wallets/${id}`}
      className="bg-surface rounded-2xl shadow-md p-6 ml-4 hover:bg-disabled transition"
    >
      <h2 className="text-body font-lato text-subtext">{name}</h2>
      <p className="text-color font-bold font-montserrat text-h2 mb-1">
        {balance} {currency}
      </p>
    </Link>
  )
}
