import { Button } from '../../components/UI/Button'
import { CreateWalletModal } from '../../components/features/wallets/CreateWalletModal'
import { useState } from 'react'
import { usePageTitle } from '../../hooks/usePageTitle'
import { useEffect } from 'react'
import { CreateTransModal } from '../../components/features/transactions/CreateTransModal'
import { transactions } from '../../stores/transactions'
import { TransactionCard } from '../../components/features/transactions/TransactionCard'

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
        </div>
      </div>
      <div className="grid grid-cols-3 justify-center gap-8 px-5 mt-4">
        Maybe add wallets(if need)
      </div>
      <div className="grid grid-cols-3 justify-center gap-8 px-5 mt-4">
        <div>
          <div className="flex justify-between  ">
            <h3 className="text-text-secondary text-lato text-h3">
              Last Transactions
            </h3>
            <Button
              onClick={() => setIsCreateTransactionModelOpen(true)}
              text="Add Transaction"
              fullwidth={false}
              defpadding={false}
            />
          </div>
          <div className="mt-4 mr-4">
            <div className="flex flex-col">
              {transactions.map((trans, idx) => (
                <TransactionCard
                  key={idx}
                  id={trans.id}
                  walletId={trans.walletId}
                  amount={trans.amount}
                  type={trans.type}
                  description={trans.description}
                  //category={trans.category}
                  createdAt={trans.createdAt}
                  currency={trans.currency}
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-text-secondary text-lato text-h3">Total Money</h3>
        </div>
        <div>
          <h3 className="text-text-secondary text-lato text-h3">
            All Subcriptions
          </h3>
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
