// src/hooks/useLogOut.ts
import { useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth'

export const useLogOut = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogOut = () => {
    logout()
    navigate('/login')
  }

  return { handleLogOut }
}
