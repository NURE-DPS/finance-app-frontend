import { Button } from '../../components/UI/Button'
import { CreateWalletModal } from '../../components/features/wallets/CreateWalletModal'
import { useState } from 'react'
import { usePageTitle } from '../../hooks/usePageTitle'
import { useEffect } from 'react'
import { CreateTransModal } from '../../components/features/transactions/CreateTransModal'
import { TransactionCard } from '../../components/features/transactions/TransactionCard'
import { fetchTransactions } from '../../api/transactions/transactionsApi'
import { TransactionTypeNumberId } from '../../interfaces/Interfaces'
import { LoadingCircleSpinner } from '../../components/UI/LoadingCircleSpinner'
import { useTransactions } from '../../hooks/transactions/useTransactions'

export const Dashboard = () => {
  const [isCreateWalletModalOpen, setIsWalletModalOpen] = useState(false)
  const [isCreateTransactionModelOpen, setIsCreateTransactionModelOpen] =
    useState(false)
  const { setTitle } = usePageTitle()

  const { transactions, loading, error } = useTransactions()

  useEffect(() => {
    setTitle('Dashboard')
  }, [setTitle])

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <Button
          onClick={() => setIsWalletModalOpen(true)}
          text="Add Wallet"
          fullwidth={false}
          defpadding={false}
        />
      </div>

      <div className="grid grid-cols-3 justify-center gap-8 px-5 mt-4">
        Maybe add wallets (if needed)
      </div>

      <div className="grid grid-cols-3 justify-center gap-8 px-5 mt-4">
        <div>
          <div className="flex justify-between">
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

          {loading ? (
            <LoadingCircleSpinner />
          ) : error ? (
            <div className="text-red-500 mt-4">Error loading transactions.</div>
          ) : (
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
                    createdAt={trans.createdAt}
                    currency={trans.currency}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <h3 className="text-text-secondary text-lato text-h3">Total Money</h3>
        </div>
        <div>
          <h3 className="text-text-secondary text-lato text-h3">
            All Subscriptions
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
