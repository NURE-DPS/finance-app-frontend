import { ReactNode, useEffect, useState } from "react"
import { getToken, removeToken, saveToken } from "../utils/auth"
import { AuthContext } from "../context/AuthContext"

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken())

  useEffect(() => {
    const token = getToken()
    setIsAuthenticated(!!token)
  }, [])

  const login = (token: string) => {
    saveToken(token)
    setIsAuthenticated(true)
  }

  const logout = () => {
    removeToken()
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
