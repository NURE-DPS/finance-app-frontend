import { toast } from 'sonner'
import { logIn } from '../api/auth/authApi'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth'

export const useLogIn = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleLogIn = async (data: { email: string; password: string }) => {
    await toast.promise(
      logIn(data).then((response) => {
        const token = response.data?.token
        if (token) {
          login(token)
          navigate('/')
        }
        return response
      }),
      {
        loading: 'Logging in...',
        success: () => 'Login successful!',
        error: (error: any) => {
          const message =
            error.response?.data?.error ||
            error.response?.data?.message ||
            'Unexpected error during login'
          return message
        },
      },
    )
  }

  return { handleLogIn }
}
