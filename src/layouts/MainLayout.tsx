import { ReactElement } from 'react'
import { Sidebar } from '../components/Sidebar'

export const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="flex h-screen bg-black">
      <Sidebar/>
      <div className="flex">{children}</div>
    </div>
  )
}
