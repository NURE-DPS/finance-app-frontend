import { toast } from 'sonner'
import { createWallet } from '../../api/wallets/walletsApi'
import { WalletTypeString } from '../../interfaces/Interfaces'

export const useCreateWallet = (onSuccess?: () => void) => {
  const handleCreateWallet = async (data: WalletTypeString) => {
    await toast.promise(
      createWallet({
        name: data.name,
        currency: data.currency,
        balance: parseFloat(data.balance),
      }),
      {
        loading: 'Creating wallet...',
        success: () => {
          onSuccess?.()
          return 'Wallet created successfully!'
        },
        error: (error: any) => {
          const message =
            error.response?.data?.error ||
            error.response?.data?.message ||
            'Unexpected error while creating wallet'
          return message
        },
      },
    )
  }

  return { handleCreateWallet }
}
