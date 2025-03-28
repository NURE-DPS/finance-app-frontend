import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import { Dashboard } from "./pages/Dashboard"
import { Settings } from "./pages/Settings"

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
