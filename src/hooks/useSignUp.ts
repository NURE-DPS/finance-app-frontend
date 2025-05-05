
import { signUp } from '../api/auth/authApi'
import { useNavigate } from 'react-router-dom'

export const useSignUp = () => {
  const navigate = useNavigate()

  const handleSignUp = async (data: {
    name: string
    email: string
    password: string
  }) => {
    try {
      const response = await signUp(data)
      if (response.status === 201) {
        // сюда не стоит добавлять тоаст, потому что оно все равно переадрессуется 
        navigate('/')
      } else {
        alert(response.data.error || 'Signup failed') // до этого if оно не доходит
      }
    } catch (error: any) {
      // отлавливаем ошибки все тут и тоаст показываем тоже тут
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        'Unexpected error during signup'
      alert(message)
    }
  }

  return { handleSignUp }
}
