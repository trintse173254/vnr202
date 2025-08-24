import React from 'react'
import { Card, Tooltip } from 'antd'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { motion } from 'framer-motion'
import Quiz from '../components/Quiz'

const DoiMoi = () => {
  const gdpData = [
    { year: 1986, gdp: 2.8, growth: 2.8 },
    { year: 1990, gdp: 6.1, growth: 5.1 },
    { year: 1995, gdp: 9.5, growth: 9.5 },
    { year: 2000, gdp: 6.8, growth: 6.8 },
    { year: 2005, gdp: 8.4, growth: 8.4 },
    { year: 2010, gdp: 6.8, growth: 6.8 },
    { year: 2015, gdp: 6.7, growth: 6.7 },
    { year: 2020, gdp: 2.9, growth: 2.9 }
  ]

  const fdiData = [
    { year: 1988, fdi: 0.3 },
    { year: 1995, fdi: 7.4 },
    { year: 2000, fdi: 2.8 },
    { year: 2005, fdi: 6.8 },
    { year: 2010, fdi: 8.0 },
    { year: 2015, fdi: 11.8 },
    { year: 2020, fdi: 15.8 }
  ]

  const quizData = {
    question: "Đổi mới kinh tế Việt Nam bắt đầu từ năm nào?",
    options: [
      "1975",
      "1986", 
      "1990",
      "1995"
    ],
    correctAnswer: 1,
    explanation: "Đại hội VI của Đảng (12/1986) đã chính thức khởi động chính sách Đổi mới, chuyển từ kinh tế kế hoạch hóa tập trung sang kinh tế thị trường định hướng xã hội chủ nghĩa."
  }

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-header">Thành tựu Đổi mới (1986 - nay)</h1>
        <div className="section-quote">
          "Đổi mới là con đường tất yếu khách quan, là cuộc cách mạng sâu sắc, toàn diện của Việt Nam"
        </div>

        {/* Kinh tế Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="content-card mb-6">
            <h3 className="text-xl font-semibold text-primary mb-4">
              📊 Thành tựu Kinh tế
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-3">Tăng trưởng GDP (%)</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={gdpData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <RechartsTooltip />
                    <Line 
                      type="monotone" 
                      dataKey="growth" 
                      stroke="#B71C1C" 
                      strokeWidth={3}
                      dot={{ fill: '#FFD700', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Vốn FDI (tỷ USD)</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={fdiData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <RechartsTooltip />
                    <Bar dataKey="fdi" fill="#B71C1C" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h5 className="font-semibold text-green-700">Giảm nghèo</h5>
                <p className="text-sm text-green-600">Từ 70% (1993) xuống 2.8% (2020)</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h5 className="font-semibold text-blue-700">Xuất khẩu</h5>
                <p className="text-sm text-blue-600">Tăng từ 0.8 tỷ USD lên 280+ tỷ USD</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h5 className="font-semibold text-purple-700">Thu nhập bình quân</h5>
                <p className="text-sm text-purple-600">Đạt mức trung bình thấp (2020)</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Chính trị - Xã hội */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="content-card mb-6">
            <h3 className="text-xl font-semibold text-primary mb-4">
              🏛️ Chính trị - Xã hội
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <h5 className="font-semibold">Ổn định chính trị</h5>
                    <p className="text-sm text-gray-600">
                      Duy trì ổn định xã hội, không có xung đột lớn
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <h5 className="font-semibold">Giáo dục phát triển</h5>
                    <p className="text-sm text-gray-600">
                      Tỷ lệ biết chữ cao, hệ thống giáo dục hoàn thiện
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🏥</span>
                  <div>
                    <h5 className="font-semibold">Y tế cải thiện</h5>
                    <p className="text-sm text-gray-600">
                      Tuổi thọ tăng, tỷ lệ tử vong giảm
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🏗️</span>
                  <div>
                    <h5 className="font-semibold">Cơ sở hạ tầng</h5>
                    <p className="text-sm text-gray-600">
                      Đường xá, cầu cống, sân bay hiện đại
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Hội nhập quốc tế */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="content-card mb-6">
            <h3 className="text-xl font-semibold text-primary mb-4">
              🌍 Hội nhập quốc tế
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Tooltip title="Gia nhập WTO năm 2007, mở cửa thị trường">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="text-3xl mb-2">🏢</div>
                  <h5 className="font-semibold text-blue-700">WTO</h5>
                  <p className="text-sm text-blue-600">Thành viên từ 2007</p>
                </div>
              </Tooltip>
              
              <Tooltip title="Thành viên Liên Hợp Quốc từ 1977">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="text-3xl mb-2">🇺🇳</div>
                  <h5 className="font-semibold text-green-700">UN</h5>
                  <p className="text-sm text-green-600">Thành viên từ 1977</p>
                </div>
              </Tooltip>
              
              <Tooltip title="Thành viên APEC từ 1998, ASEAN từ 1995">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="text-3xl mb-2">🤝</div>
                  <h5 className="font-semibold text-purple-700">APEC/ASEAN</h5>
                  <p className="text-sm text-purple-600">Hợp tác khu vực</p>
                </div>
              </Tooltip>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Thành tựu nổi bật:</strong> Việt Nam đã trở thành đối tác tin cậy trong cộng đồng quốc tế, 
                tham gia tích cực các tổ chức đa phương và ký kết nhiều hiệp định thương mại quan trọng.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Quiz Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Quiz data={quizData} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default DoiMoi
