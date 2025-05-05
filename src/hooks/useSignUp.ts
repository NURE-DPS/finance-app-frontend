import { signUp } from '../api/auth/authApi'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth'

export const useSignUp = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSignUp = async (data: {
    name: string
    email: string
    password: string
  }) => {
    try {
      const response = await signUp(data)

      if (response.status === 201) {
        const token = response.data.data?.session?.access_token
        if (token) {
          login(token)
          navigate('/')
        }
      } else {
        alert(response.data.error || 'Signup failed')
      }
    } catch (error: any) {
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        'Unexpected error during signup'
      alert(message)
    }
  }

  return { handleSignUp }
}