import { AuthProvider } from './AuthProvider'
import { PageTitleProvider } from './PageTitleProvider'
import { WalletProvider } from './WalletProvider'

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <PageTitleProvider>
        <WalletProvider>{children}</WalletProvider>
      </PageTitleProvider>
    </AuthProvider>
  )
}
