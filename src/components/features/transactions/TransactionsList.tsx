import { TransactionTypeNumberId } from '../../../interfaces/Interfaces'
import { TransactionCard } from './TransactionCard'

interface TransactionListProps {
  transactions: TransactionTypeNumberId[]
}

export const TransactionList = ({ transactions }: TransactionListProps) => {
  if (transactions.length === 0) {
    return (
      <p className="text-center text-text-secondary mt-10 text-h3 font-lato">
        No transactions yet...
      </p>
    )
  }

  const groupedByMonth = transactions.reduce(
    (groups: { [key: string]: TransactionTypeNumberId[] }, transaction) => {
      const date = new Date(transaction.createdAt)
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
                      new Date(b.createdAt).getTime() -
                      new Date(a.createdAt).getTime(),
                  )
                  .map((trans, idx) => (
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
          )
        })}
    </div>
  )
}
