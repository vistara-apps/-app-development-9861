import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Templates from './pages/Templates'
import Campaigns from './pages/Campaigns'
import Analytics from './pages/Analytics'
import Login from './pages/Login'
import { UserProvider } from './context/UserContext'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-50">
        {isAuthenticated ? (
          <>
            <Header onLogout={() => setIsAuthenticated(false)} />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/campaigns" element={<Campaigns />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </div>
    </UserProvider>
  )
}

export default App