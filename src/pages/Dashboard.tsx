import WalletCreation from '../components/CreateWalletModal'
import { useState } from 'react'

export const Dashboard = () => {
  const [isWalletCreation, setIsWalletCreation] = useState(false)

  return (
    <div className="text-color h-screen">
      <div className="w-full flex items-center justify-between">
        <div className="text-xl font-bold font-montserrat">Dashboard</div>
        <button
          onClick={() => setIsWalletCreation(true)}
          className="px-4 py-2 mr-4 bg-color text-surface rounded-[12px] hover:bg-disabled transition cursor-pointer font-lato"
        >
          Add Wallet
        </button>
        {isWalletCreation && (
          <div className="fixed inset-0 flex items-start justify-center bg-background/40">
            <WalletCreation onClose={() => setIsWalletCreation(false)} />
          </div>
        )}
      </div>
    </div>
  )
}
