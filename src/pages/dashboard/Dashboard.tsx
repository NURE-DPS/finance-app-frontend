import { Button } from '../../components/UI/Button'
import { CreateWalletModal } from '../../components/features/wallets/CreateWalletModal'
import { useState } from 'react'
import { usePageTitle } from '../../hooks/usePageTitle'
import { useEffect } from 'react'
import { CreateTransModal } from '../../components/features/transactions/CreateTransModal'

export const Dashboard = () => {
  const [isCreateWalletModalOpen, setIsWalletModalOpen] = useState(false)
  const [isCreateTransactionModelOpen, setIsCreateTransactionModelOpen] =
    useState(false)
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
        <div>
          <Button
            onClick={() => setIsWalletModalOpen(true)}
            text="Add Wallet"
            fullwidth={false}
            defpadding={false}
          />
          <Button
            onClick={() => setIsCreateTransactionModelOpen(true)}
            text="Add Transaction"
            fullwidth={false}
            defpadding={false}
          />
        </div>
      </div>
      <CreateWalletModal
        open={isCreateWalletModalOpen}
        setOpen={setIsWalletModalOpen}
      />
      <CreateTransModal
        open={isCreateTransactionModelOpen}
        setOpen={setIsCreateTransactionModelOpen}
        showWalletSelection={true}
      />
    </>
  )
}
