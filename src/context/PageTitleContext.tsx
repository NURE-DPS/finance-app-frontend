import { createContext } from 'react'

export const PageTitleContext = createContext<{
  title: string
  setTitle: (title: string) => void
} | null>(null)
