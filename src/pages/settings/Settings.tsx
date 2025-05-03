import { useEffect } from 'react'
import { usePageTitle } from '../../hooks/usePageTitle'

export const Settings = () => {
  const { setTitle } = usePageTitle()

  useEffect(() => {
    setTitle('Settings')
  }, [setTitle])

  return <> </>
}
