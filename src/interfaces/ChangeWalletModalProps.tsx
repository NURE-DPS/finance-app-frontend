export interface ChangeWalletModalProps {
  onClose: () => void
  defname: string
  defcurr: string
  defbalance: string
}

export interface DeleteWalletModalProps {
  onClose: () => void
  defid: string
  defname: string
  defcurr: string
  defbalance: string
}
