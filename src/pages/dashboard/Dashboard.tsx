import { Button } from '../../components/UI/Button'
import { CreateWalletModal } from '../../components/features/wallets/CreateWalletModal'
import { useState } from 'react'
import { usePageTitle } from '../../hooks/usePageTitle'
import { useEffect } from 'react'

export const Dashboard = () => {
  const [isCreateWalletModalOpen, setIsWalletModalOpen] = useState(false)
  const { setTitle } = usePageTitle()

  useEffect(() => {
    setTitle('Dashboard')
  }, [setTitle])

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <h2 className="text-text-primary text-xl font-montserrat">
          Your last activity
        </h2>
        <Button
          onClick={() => setIsWalletModalOpen(true)}
          text="Add Wallet"
          fullwidth={false}
          defpadding={false}
        />
      </div>
      <CreateWalletModal
        open={isCreateWalletModalOpen}
        setOpen={setIsWalletModalOpen}
      />
    </>
  )
}
