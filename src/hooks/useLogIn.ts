import { logIn } from '../api/auth/authApi'
import { useNavigate } from 'react-router-dom'

export const useLogIn = () => {
  const navigate = useNavigate()

  const handleLogIn = async (data: { email: string; password: string }) => {
    console.log(data)
    try {
      const response = await logIn(data)
      if (response.status === 200) {
        navigate('/')
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
