import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth'

export const useLogOut = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogOut = () => {
    try {
      logout()
      navigate('/login')
      toast.success('You have been logged out.')
    } catch (error) {
      toast.error('Unexpected error during logout.')
    }
  }

  return { handleLogOut }
}
