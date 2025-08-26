import React, { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const menuItems = [
  { 
    path: '/bao-cap', 
    label: 'Thời kì Bao cấp', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    )
  },
  { 
    path: '/doi-moi', 
    label: 'Thành tựu Đổi mới', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      </svg>
    )
  },
  { 
    path: '/nhan-dinh', 
    label: 'Nhận định', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7H5c-1.1 0-2 .9-2 2v1h18V6c0-1.1-.9-2-2-2zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1H6v1z"/>
      </svg>
    )
  },
  { 
    path: '/timeline', 
    label: 'Timeline', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
      </svg>
    )
  },
  // { 
  //   path: '/tu-lieu', 
  //   label: 'Tư liệu', 
  //   icon: (
  //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //       <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 1v3H5V7h14z"/>
  //     </svg>
  //   )
  // },
  { 
    path: '/quiz', 
    label: 'Quiz', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
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
          className=""
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}

export default Layout
