import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './hooks/auth/useAuth'
import { JSX } from 'react'
import api from './api/axiosInstance'
import { LoadingCircleSpinner } from './components/UI/LoadingCircleSpinner'

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, logout } = useAuth()
  const [checking, setChecking] = useState(true)
  const [valid, setValid] = useState(false)

  useEffect(() => {
    const validateToken = async () => {
      if (!isAuthenticated) {
        setChecking(false)
        return
      }

      try {
        const res = await api.get('/auth/validate-token')
        if (res.status === 200) {
          setValid(true)
        } else {
          logout()
        }
      } catch (err) {
        logout()
      } finally {
        setChecking(false)
      }
    }

    validateToken()
  }, [isAuthenticated, logout])

  if (checking) {
    return <LoadingCircleSpinner />
  }

  if (!valid) {
    return <Navigate to="/login" replace />
  }

  return children
}
