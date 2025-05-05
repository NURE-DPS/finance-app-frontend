import { Toaster } from 'sonner'

export const CustomToaster = () => (
  <Toaster
    position="bottom-right"
    richColors
    toastOptions={{
      classNames: {
        toast: '!bg-surface !border-2 !border-border',
        success: '!text-success',
        error: '!text-error',
        loading: '!text-text-primary',
      },
    }}
  />
)
