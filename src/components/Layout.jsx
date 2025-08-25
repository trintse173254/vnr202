import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const menuItems = [
  { path: '/bao-cap', label: 'Thời kì Bao cấp', icon: '📜' },
  { path: '/doi-moi', label: 'Thành tựu Đổi mới', icon: '📈' },
  { path: '/nhan-dinh', label: 'Nhận định', icon: '⭐' },
  { path: '/timeline', label: 'Timeline', icon: '⏳' },
  { path: '/tu-lieu', label: 'Tư liệu', icon: '📂' },
]

const Layout = ({ children }) => {
  const location = useLocation()

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-80 bg-primary shadow-2xl">
        <div className="p-6 border-b border-red-800">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Emblem_of_Vietnam.svg" alt="Flag of Vietnam" className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-xl font-bold text-white text-center">
            Lịch sử Việt Nam
          </h1>
          <p className="text-red-200 text-sm text-center mt-2">
            Từ Bao cấp đến Đổi mới
          </p>
        </div>
        
        <nav className="mt-6">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path || 
                           (location.pathname === '/' && item.path === '/bao-cap')
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`sidebar-item ${isActive ? 'active' : ''}`}
              >
                <span className="text-2xl mr-4">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 overflow-auto">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="p-8"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}

export default Layout
