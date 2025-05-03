import type { ReactElement } from 'react'
import { Sidebar } from '../components/layout/Sidebar'
import { usePageTitle } from '../hooks/usePageTitle'

export const MainLayout = ({ children }: { children: ReactElement }) => {
  const { title } = usePageTitle()
  return (
    <div className="w-full h-full min-h-full box-border flex flex-row bg-bg">
      <Sidebar />
      <div className="basis-3/4 flex-grow flex flex-col p-6">
        <div className="w-full text-text-primary h-screen">
          <div className="text-2xl font-bold font-montserrat">{title}</div>
          <div className="mt-5">{children}</div>
        </div>
      </div>
    </div>
  )
}
