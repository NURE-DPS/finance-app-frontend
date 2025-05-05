import { logIn } from '../api/auth/authApi'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth'

export const useLogIn = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleLogIn = async (data: { email: string; password: string }) => {
    try {
      console.log(data)
      const response = await logIn(data)

      if (response.status === 200) {
        const token = response.data?.token
        if (token) {
          console.log('✅ Token received:', token)
          login(token)
          navigate('/')
        } else {
          // тут тоаст
        }
      } else {
        alert(response.data.error || 'Login failed')
      }
    } catch (error: any) {
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        'Unexpected error during login'
      alert(message)
    }
  }

  return { handleLogIn }
}
