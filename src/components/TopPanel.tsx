import WalletCreation from '../components/WalletCreation'
import { useState } from 'react'

export default function TopPanel() {
  const [isWalletCreation, setIsWalletCreation] = useState(false)

  return (
    <div className="w-full h-[60px] bg-background  px-[20px] mt-3 flex items-center justify-between">
      <div className="text-xl font-bold">Dashboard</div>
      <button
        onClick={() => setIsWalletCreation(true)}
        className="px-4 py-2 mr-4 bg-white text-black rounded-[12px] hover:bg-gray-600 transition"
      >
        Add Wallet
      </button>
      {isWalletCreation && (
        <div className="fixed inset-0 flex items-start justify-center bg-gray-300/20">
          <WalletCreation onClose={() => setIsWalletCreation(false)} />
        </div>
      )}
    </div>
  )
}
