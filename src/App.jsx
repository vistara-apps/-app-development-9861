import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Templates from './pages/Templates'
import Campaigns from './pages/Campaigns'
import Analytics from './pages/Analytics'
import Login from './pages/Login'
import { UserProvider } from './context/UserContext'
import { NotificationProvider, useNotifications } from './context/NotificationContext'
import NotificationContainer from './components/NotificationSystem'

const AppContent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { notifications, removeNotification, showSuccess } = useNotifications()

  const handleLogin = () => {
    setIsAuthenticated(true)
    showSuccess('Welcome to ContentFactory!', 'Login Successful')
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    showSuccess('You have been logged out successfully', 'Logout Successful')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {isAuthenticated ? (
        <>
          <Header onLogout={handleLogout} />
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
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
      
      <NotificationContainer 
        notifications={notifications} 
        onDismiss={removeNotification} 
      />
    </div>
  )
}

function App() {
  return (
    <NotificationProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </NotificationProvider>
  )
}

export default App
