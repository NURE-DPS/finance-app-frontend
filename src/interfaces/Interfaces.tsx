export interface OpenModal {
  open: boolean
  setOpen: (value: boolean) => void
}

//проверить работает ли interface вместо type для WalletType
export interface WalletType {
  id: string
  name: string
  balance: number
  currency: string
}
