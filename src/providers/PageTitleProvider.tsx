import { PageTitleContext } from '../context/PageTitleContext'
import type { ReactNode } from 'react'
import { useState } from 'react'

export const PageTitleProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState('')
  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </PageTitleContext.Provider>
  )
}
