import { PageTitleProvider } from './PageTitleProvider'
import { WalletProvider } from './WalletProvider'

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageTitleProvider>
      <WalletProvider>{children}</WalletProvider>
    </PageTitleProvider>
  )
}
