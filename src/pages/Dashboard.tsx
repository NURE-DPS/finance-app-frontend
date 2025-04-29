import { Button } from '../components/Button'
import { CreateWalletModal } from '../components/Wallets/CreateWalletModal'
import { useState } from 'react'

export const Dashboard = () => {
  const [isWalletCreation, setIsWalletCreation] = useState(false)

  return (
    <div className="text-color h-screen">
      <div className="w-full flex items-center justify-between">
        <div className="text-xl font-bold font-montserrat">Dashboard</div>
        <Button
          onClick={() => setIsWalletCreation(true)}
          text="Add Wallet"
          fullwidth={false}
          defpadding={false}
        />
        {isWalletCreation && (
          <div className="fixed inset-0 flex items-start justify-center bg-background/40">
            <div className="bg-surface w-[600px] p-6 rounded-2xl shadow-lg mt-8">
              <CreateWalletModal onClose={() => setIsWalletCreation(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
