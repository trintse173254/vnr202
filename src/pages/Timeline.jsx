import React, { useState } from 'react'
import { Card, Tooltip } from 'antd'
import { motion } from 'framer-motion'

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const timelineEvents = [
    {
      year: 1954,
      title: "Chiến thắng Điện Biên Phủ",
      description: "Kết thúc ách thống trị của thực dân Pháp, mở ra kỷ nguyên độc lập dân tộc",
      details: "Chiến thắng lịch sử làm rung chuyển thế giới, khẳng định ý chí và sức mạnh của dân tộc Việt Nam",
      color: "bg-red-500"
    },
    {
      year: 1975,
      title: "Thống nhất đất nước",
      description: "Giải phóng hoàn toàn miền Nam, thống nhất Tổ quốc",
      details: "30/4/1975 - Ngày giải phóng miền Nam, thống nhất đất nước. Kết thúc chiến tranh, bắt đầu xây dựng đất nước",
      color: "bg-green-500"
    },
    {
      year: 1986,
      title: "Khởi động Đổi mới",
      description: "Đại hội VI của Đảng, chính sách Đổi mới được ra đời",
      details: "Chuyển từ kinh tế kế hoạch hóa tập trung sang kinh tế thị trường định hướng XHCN",
      color: "bg-blue-500"
    },
    {
      year: 2000,
      title: "Bước vào thiên niên kỷ mới",
      description: "Kinh tế phát triển ổn định, hội nhập quốc tế sâu rộng",
      details: "GDP tăng trưởng cao, xuất khẩu phát triển mạnh, đời sống nhân dân được cải thiện",
      color: "bg-purple-500"
    },
    {
      year: 2010,
      title: "Phát triển toàn diện",
      description: "Đạt mức thu nhập trung bình thấp, công nghiệp hóa mạnh mẽ",
      details: "Cơ sở hạ tầng hiện đại, giáo dục y tế phát triển, vị thế quốc tế nâng cao",
      color: "bg-orange-500"
    },
    {
      year: 2020,
      title: "Thành tựu toàn diện",
      description: "Ứng phó thành công COVID-19, kinh tế phục hồi nhanh",
      details: "Thể hiện năng lực quản trị, sức mạnh của hệ thống chính trị và tinh thần đoàn kết dân tộc",
      color: "bg-teal-500"
    }
  ]


  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-header">Timeline Lịch sử Việt Nam</h1>
        <div className="section-quote">
          "Lịch sử là dòng chảy liên tục của những thành tựu và bài học quý báu"
        </div>

        {/* Horizontal Timeline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="content-card mb-8">
            <h3 className="text-xl font-semibold text-primary mb-6 text-center">
              ⏳ Dòng thời gian lịch sử
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2"></div>
              
              {/* Timeline Events */}
              <div className="relative flex justify-between items-center py-8">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex flex-col items-center cursor-pointer group"
                    onMouseEnter={() => setSelectedEvent(event)}
                    onMouseLeave={() => setSelectedEvent(null)}
                  >
                    {/* Event Dot */}
                    <div className={`w-6 h-6 ${event.color} rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 z-10`}></div>
                    
                    {/* Year Label */}
                    <div className="mt-3 text-sm font-bold text-primary group-hover:text-accent transition-colors">
                      {event.year}
                    </div>
                    
                    {/* Event Title */}
                    <div className="mt-1 text-xs text-center max-w-20 group-hover:text-primary transition-colors">
                      {event.title}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Event Details */}
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="content-card mb-6 border-l-4 border-primary">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${selectedEvent.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                  {selectedEvent.year.toString().slice(-2)}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-primary mb-2">
                    {selectedEvent.year} - {selectedEvent.title}
                  </h4>
                  <p className="text-gray-700 mb-3">{selectedEvent.description}</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                    {selectedEvent.details}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Detailed Timeline Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="content-card h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <div className={`w-8 h-8 ${event.color} rounded-full flex items-center justify-center text-white font-bold text-sm mr-3`}>
                      {event.year.toString().slice(-2)}
                    </div>
                    <h4 className="font-bold text-primary">{event.year}</h4>
                  </div>
                  
                  <h5 className="font-semibold mb-2">{event.title}</h5>
                  <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                  <p className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                    {event.details}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Historical Significance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="content-card mb-6">
            <h3 className="text-xl font-semibold text-primary mb-4">
              📚 Ý nghĩa lịch sử
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h5 className="font-semibold text-red-700">Giai đoạn đấu tranh (1954-1975)</h5>
                  <p className="text-sm text-red-600">
                    Từ Điện Biên Phủ đến thống nhất: Khẳng định ý chí độc lập, 
                    tự do của dân tộc Việt Nam
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h5 className="font-semibold text-blue-700">Giai đoạn xây dựng (1975-1986)</h5>
                  <p className="text-sm text-blue-600">
                    Thống nhất đất nước, xây dựng chủ nghĩa xã hội: 
                    Những khó khăn và bài học quý báu
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-semibold text-green-700">Giai đoạn đổi mới (1986-2010)</h5>
                  <p className="text-sm text-green-600">
                    Đổi mới toàn diện: Từ kinh tế kế hoạch sang 
                    kinh tế thị trường định hướng XHCN
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <h5 className="font-semibold text-purple-700">Giai đoạn hội nhập (2010-nay)</h5>
                  <p className="text-sm text-purple-600">
                    Hội nhập quốc tế sâu rộng: Vị thế và uy tín 
                    ngày càng được nâng cao
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Timeline
