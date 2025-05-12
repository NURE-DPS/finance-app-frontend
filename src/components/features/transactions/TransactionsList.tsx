import { TransactionNumber, WalletType } from '../../../interfaces/Interfaces'
import { TransactionCard } from './TransactionCard'

interface TransactionListProps {
  transactions: TransactionNumber[]
  selectedWallet: WalletType
}

export const TransactionList = ({
  transactions,
  selectedWallet,
}: TransactionListProps) => {
  if (transactions.length === 0) {
    return (
      <p className="text-center text-text-secondary mt-10 text-h3 font-lato">
        No transactions yet...
      </p>
    )
  }

  const groupedByMonth = transactions.reduce(
    (groups: { [key: string]: TransactionNumber[] }, transaction) => {
      const date = new Date(transaction.date)
      const monthKey = `${date.getFullYear()}-${date.getMonth()}`

      if (!groups[monthKey]) {
        groups[monthKey] = []
      }
      groups[monthKey].push(transaction)

      return groups
    },
    {},
  )

  return (
    <div className="flex flex-col mt-10 mr-4">
      {Object.keys(groupedByMonth)
        .sort((a, b) => {
          const [yearA, monthA] = a.split('-').map(Number)
          const [yearB, monthB] = b.split('-').map(Number)
          return (
            new Date(yearB, monthB).getTime() -
            new Date(yearA, monthA).getTime()
          )
        })
        .map((monthKey) => {
          const [year, month] = monthKey.split('-').map(Number)
          const monthName = new Date(year, month).toLocaleString('en-US', {
            month: 'long',
            year: 'numeric',
          })

          return (
            <div key={monthKey} className="mb-8">
              <h2 className="text-h3 text-text-secondary font-semibold mb-4">
                {monthName}
              </h2>
              <div className="flex flex-col gap-2">
                {groupedByMonth[monthKey]
                  .sort(
                    (a, b) =>
                      new Date(b.date).getTime() - new Date(a.date).getTime(),
                  )
                  .map((trans, idx) => (
                    <TransactionCard
                      key={idx}
                      walletId={trans.walletId}
                      amount={trans.amount.toString()}
                      type={trans.type}
                      description={trans.description}
                      category={trans.category}
                      date={trans.date}
                      currency={selectedWallet.currency}
                    />
                  ))}
              </div>
            </div>
          )
        })}
    </div>
  )
}
