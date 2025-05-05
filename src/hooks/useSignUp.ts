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
    try {
      const response = await signUp(data)
      if (response.status === 201) {
        toast.success('Signup successful!')
        navigate('/')
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
