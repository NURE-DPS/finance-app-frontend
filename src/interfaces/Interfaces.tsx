import { TransactionCategory } from '../stores/transactions'

export interface ModalControl {
  open: boolean
  setOpen: (value: boolean) => void
}

export interface WalletType {
  id: string
  name: string
  balance: number
  currency: string
}

export interface ChangeWalletProps {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
  name: string
  currency: string
  balance: number
}

export type SignUpFormValues = {
  name: string
  email: string
  password: string
}

export type WalletFormValues = {
  name: string
  currency: string
  balance: string
}

export type TransactionType = 'expense' | 'income' | 'transfer'

//под вопросом нужно ли и можно ли так делать с категорией
export interface Transaction {
  walletId: string
  categoryId?: number
  type: 'INCOME' | 'EXPENSE'
  amount: string
  currency: string
  description?: string
  createdAt: Date
}
