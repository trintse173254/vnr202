import React, { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const menuItems = [
  { 
    path: '/bao-cap', 
    label: 'Thời kì Bao cấp', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
      </svg>
    )
  },
  { 
    path: '/doi-moi', 
    label: 'Thành tựu Đổi mới', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14z"/>
      </svg>
    )
  },
  { 
    path: '/nhan-dinh', 
    label: 'Nhận định', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  },
  { 
    path: '/timeline', 
    label: 'Timeline', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  { 
    path: '/tu-lieu', 
    label: 'Tư liệu', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 1v3H5V7h14z"/>
      </svg>
    )
  },
  { 
    path: '/quiz', 
    label: 'Quiz', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17V17h2v-2.83l3.59 3.58L17 15l-6-6z"/>
      </svg>
    )
  },
]

const Layout = ({ children }) => {
  const location = useLocation()

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

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
          className="p-8"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}

export default Layout
