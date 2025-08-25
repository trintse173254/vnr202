import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const menuItems = [
  { path: '/bao-cap', label: 'Thời kì Bao cấp', icon: '📜' },
  { path: '/doi-moi', label: 'Thành tựu Đổi mới', icon: '📈' },
  { path: '/nhan-dinh', label: 'Nhận định', icon: '⭐' },
  { path: '/timeline', label: 'Timeline', icon: '⏳' },
  // { path: '/tu-lieu', label: 'Tư liệu', icon: '📂' },
  { path: '/quiz', label: 'Quiz', icon: '❓' },
]

const Layout = ({ children }) => {
  const location = useLocation()

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-primary shadow-2xl">
        {/* Header Section with Navigation */}
        <div className="px-6 py-2 h-18">
          <div className="flex items-center justify-between ml-28">
            <div className="flex items-center space-x-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Emblem_of_Vietnam.svg" alt="Flag of Vietnam" className="w-12 h-12" />
              <div>
                <h1 className="text-xl font-bold text-white">
                  Lịch sử Việt Nam
                </h1>
                <p className="text-red-200 text-sm">
                  Từ Bao cấp đến Đổi mới
                </p>
              </div>
            </div>
            
            {/* Navigation Bar */}
            <nav className="mr-28">
              <div className="flex justify-end space-x-1 overflow-x-auto">
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.path || 
                                 (location.pathname === '/' && item.path === '/bao-cap')
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`topbar-item ${isActive ? 'active' : ''}`}
                    >
                      <span className="text-xl mr-2">{item.icon}</span>
                      <span className="font-medium whitespace-nowrap">{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className=""
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}

export default Layout
