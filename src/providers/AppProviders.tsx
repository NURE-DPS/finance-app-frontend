import { PageTitleProvider } from './PageTitleProvider'

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <PageTitleProvider>{children}</PageTitleProvider>
}
