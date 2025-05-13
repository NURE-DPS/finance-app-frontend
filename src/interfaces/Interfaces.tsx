export interface ModalControl {
  open: boolean
  setOpen: (value: boolean) => void
}

type WalletBase<TBalance> = {
  name: string
  currency: string
  balance: TBalance
}

export type WalletTypeNumber = WalletBase<number>
export type WalletTypeString = WalletBase<string>
export type WalletTypeNumberId = WalletTypeNumber & { id: string }
export type WalletTypeStringId = WalletTypeString & { id: string }

export type SignUpFormValues = {
  name: string
  email: string
  password: string
}

type TransactionBase<TTransaction> = {
  walletId: string
  type: 'INCOME' | 'EXPENSE'
  amount: TTransaction
  currency: string
  description?: string
  categoryId?: number
  createdAt: Date
}

export type TransactionTypeNumber = TransactionBase<number>
export type TransactionTypeString = TransactionBase<string>
export type TransactionTypeNumberId = TransactionTypeNumber & { id: string }
export type TransactionTypeStringId = TransactionTypeString & { id: string }

export type Category = {
  id: string;
  name: string;
  icon: string | null;
};
