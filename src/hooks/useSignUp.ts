import { toast } from 'sonner'
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
    const promise = signUp(data)

    toast.promise(promise, {
      loading: 'Registering...',
      success: () => {
        const token = response.data.data?.session?.access_token
        if (token) {
          login(token)
          navigate('/')
          return 'Registration was successful!'
        }
      },
      error: (error: any) => {
        const message =
          error.response?.data?.error ||
          error.response?.data?.message ||
          'Unexpected error during signup'
        return message
      },
    })

    try {
      await promise
    } catch {}
  }

  return { handleSignUp }
}