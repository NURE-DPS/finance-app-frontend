// type TransactionCategory =
//   | 'food'
//   | 'travel'
//   | 'clothes'
//   | 'entertainment'
//   | 'other'

//
interface Transaction {
  id: string
  walletId: string
  type: 'INCOME' | 'EXPENSE'
  amount: number
  currency: string
  description?: string
  categoryId?: number
  //category: TransactionCategory
  createdAt: Date
}

export const transactions: Transaction[] = [
  {
    id: 'txn1',
    type: 'EXPENSE',
    amount: 45.99,
    description: 'Grocery shopping',
    //category: 'food',
    currency: 'UAH',
    createdAt: new Date('2025-04-28'),
    walletId: 'bbf1d074-5fdb-4076-97ed-19cd28344488',
  },
  {
    id: 'txn2',
    type: 'INCOME',
    amount: 1500,
    description: 'Freelance payment',
    //category: 'other',
    currency: 'EUR',
    createdAt: new Date('2025-04-30'),
    walletId: 'e3f461e9-ade7-4698-910c-9646efbaab28',
  },
  {
    id: 'txn3',
    type: 'EXPENSE',
    amount: 200,
    description: 'Transfer to savings',
    //category: 'other',
    currency: 'EUR',
    createdAt: new Date('2025-05-01'),
    walletId: 'e3f461e9-ade7-4698-910c-9646efbaab28',
  },
  {
    id: 'txn4',
    type: 'INCOME',
    amount: 70.5,
    description: 'Cinema and snacks',
    //category: 'entertainment',
    currency: 'UAH',
    createdAt: new Date('2025-05-03'),
    walletId: 'bbf1d074-5fdb-4076-97ed-19cd28344488',
  },
  {
    id: 'txn5',
    type: 'EXPENSE',
    amount: 120,
    description: 'New shoes',
    //category: 'clothes',
    currency: 'USD',
    createdAt: new Date('2025-05-04'),
    walletId: '36d5eb6b-35c2-44b4-a353-e981b794f0ce',
  },
  {
    id: 'txn6',
    type: 'EXPENSE',
    amount: 99.25,
    description: 'Test Transfer',
    //category: 'other',
    currency: 'EUR',
    createdAt: new Date('2025-02-11'),
    walletId: 'e3f461e9-ade7-4698-910c-9646efbaab28',
  },
]
