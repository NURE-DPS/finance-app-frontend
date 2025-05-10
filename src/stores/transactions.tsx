import { TransactionType } from '../interfaces/Interfaces'

export type TransactionCategory =
  | 'food'
  | 'travel'
  | 'clothes'
  | 'entertainment'
  | 'other'

interface Transaction {
  id: string
  type: TransactionType
  amount: number
  description: string
  category: TransactionCategory
  date: Date
}

export const mockTransactions: Transaction[] = [
  {
    id: 'txn1',
    type: 'expense',
    amount: 45.99,
    description: 'Grocery shopping',
    category: 'food',
    date: new Date('2025-04-28'),
  },
  {
    id: 'txn2',
    type: 'income',
    amount: 1500,
    description: 'Freelance payment',
    category: 'other',
    date: new Date('2025-04-30'),
  },
  {
    id: 'txn3',
    type: 'transfer',
    amount: 200,
    description: 'Transfer to savings',
    category: 'other',
    date: new Date('2025-05-01'),
  },
  {
    id: 'txn4',
    type: 'expense',
    amount: 70.5,
    description: 'Cinema and snacks',
    category: 'entertainment',
    date: new Date('2025-05-03'),
  },
  {
    id: 'txn5',
    type: 'expense',
    amount: 120,
    description: 'New shoes',
    category: 'clothes',
    date: new Date('2025-05-04'),
  },
]
