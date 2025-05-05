import { toast } from 'sonner'
import { signUp } from '../api/auth/authApi'
import { useNavigate } from 'react-router-dom'

export const useSignUp = () => {
  const navigate = useNavigate()

  const handleSignUp = async (data: {
    name: string
    email: string
    password: string
  }) => {
    const promise = signUp(data)

    toast.promise(promise, {
      loading: 'Registering...',
      success: () => {
        navigate('/')
        return 'Registration was successful!'
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
    } catch {
      // Ошибку уже поймали в toast.error — ничего не нужно
    }
  }

  return { handleSignUp }
}
