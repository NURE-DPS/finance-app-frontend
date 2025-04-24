import { ReactElement } from 'react'
import { Sidebar } from '../components/Sidebar'

export const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="w-full h-full min-h-full box-border flex flex-row bg-background">
      <Sidebar />
      <div className="basis-3/4 flex-grow flex flex-col">{children}</div>
    </div>
  )
}
