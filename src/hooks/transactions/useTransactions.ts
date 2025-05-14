import { useEffect, useState } from "react"
import { TransactionTypeNumberId } from "../../interfaces/Interfaces"
import { fetchTransactions } from "../../api/transactions/transactionsApi"

export const useTransactions = (walletId?: string) => {
  const [transactions, setTransactions] = useState<TransactionTypeNumberId[]>(
    [],
  )
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    const loadTransactions = async () => {
      setLoading(true)
      try {
        const response = await fetchTransactions(walletId)
        setTransactions(response.data.data)
        setError(null)
      } catch (err) {
        console.error(err)
        setError('Failed to load transactions')
      } finally {
        setLoading(false)
      }
    }

    loadTransactions()
  }, [walletId])

  return { transactions, loading, error, setTransactions }
}
