import * as motion from 'motion/react-client'
import { Link } from 'react-router-dom'
import { WalletType } from '../../../interfaces/Interfaces'

export const WalletCard = ({ id, name, balance, currency }: WalletType) => {
  return (
    <Link to={`/wallets/${id}`}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="bg-surface rounded-2xl shadow-md p-6 ml-4 hover:bg-elevation-1 transition"
      >
        <h2 className="text-body font-montserrat text-text-secondary">
          {name}
        </h2>
        <p className="text-text-primary font-bold font-lato text-h2 mb-1">
          {balance} {currency}
        </p>
      </motion.div>
    </Link>
  )
}
