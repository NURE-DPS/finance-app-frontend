import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Dashboard } from './pages/Dashboard'
import { Settings } from './pages/Settings'
import { Wallets } from './pages/Wallets'
import { WalletDetail } from './pages/WalletDetail'

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/wallets" element={<Wallets />} />
          <Route path="/wallets/:id" element={<WalletDetail />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
