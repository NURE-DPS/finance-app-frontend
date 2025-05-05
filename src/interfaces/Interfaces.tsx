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

export type FormValues = {
  name: string
  email: string
  password: string
}
