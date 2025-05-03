import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Dashboard } from './pages/dashboard/Dashboard'
import { Settings } from './pages/settings/Settings'
import { Wallets } from './pages/wallets/Wallets'
import { WalletDetail } from './pages/wallets/WalletDetail'
import type { JSX } from 'react'
import { AppProviders } from './providers/AppProviders'
import Login from './pages/auth/LogIn'

function App(): JSX.Element {
  return (
    <Router>
      <AppProviders>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <MainLayout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/wallets" element={<Wallets />} />
                  <Route path="/wallets/:id" element={<WalletDetail />} />
                </Routes>
              </MainLayout>
            }
          />
        </Routes>
      </AppProviders>
    </Router>
  )
}

export default App
