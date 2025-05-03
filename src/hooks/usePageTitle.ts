import { useContext } from 'react'
import { PageTitleContext } from '../context/PageTitleContext'

export const usePageTitle = () => {
  const ctx = useContext(PageTitleContext)
  if (ctx == null)
    throw new Error('usePageTitle must be used within PageTitleProvider')
  return ctx
}
