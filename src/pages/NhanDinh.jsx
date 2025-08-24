import React from 'react'
import { Card, Tooltip } from 'antd'
import { motion } from 'framer-motion'
import Quiz from '../components/Quiz'

const NhanDinh = () => {
  const quizData = {
    question: "Thu nhập bình quân đầu người của Việt Nam năm 2023 đạt mức nào?",
    options: [
      "Khoảng 2,500 USD",
      "Khoảng 4,300 USD", 
      "Khoảng 6,000 USD",
      "Khoảng 3,800 USD"
    ],
    correctAnswer: 1,
    explanation: "Theo bài viết của Thủ tướng Phạm Minh Chính, thu nhập bình quân đầu người của Việt Nam đạt khoảng 4,300 USD năm 2023, tăng gần 60 lần so với năm 1986."
  }

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-header">Thành tựu Việt Nam sau gần 40 năm Đổi mới</h1>
        
        {/* Source Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-blue-700">
              📰 <strong>Nguồn:</strong> Bài viết của Thủ tướng Phạm Minh Chính trên{' '}
              <a 
                href="https://baochinhphu.vn/dat-nuoc-ta-chua-bao-gio-co-duoc-co-do-tiem-luc-vi-the-va-uy-tin-quoc-te-nhu-ngay-nay-10224072719213366.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Báo Chính phủ
              </a>
            </p>
          </div>
        </motion.div>

        {/* Official Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="content-card bg-gradient-to-r from-primary/5 to-accent/5 border-l-4 border-primary">
            <div className="text-center">
              <div className="text-6xl mb-4">🇻🇳</div>
              <blockquote className="text-2xl font-bold text-primary mb-4 leading-relaxed">
                "Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay"
              </blockquote>
              <p className="text-gray-600 italic">
                - Tổng Bí thư Nguyễn Phú Trọng, được Đại hội Đảng lần thứ XIII thông qua
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Key Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-primary mb-6">📊 Những con số ấn tượng</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <div className="text-3xl font-bold text-green-700">$4,300</div>
              <div className="text-sm text-green-600 mt-1">Thu nhập bình quân/người (2023)</div>
              <div className="text-xs text-gray-500 mt-2">Tăng 60 lần so với 1986</div>
            </Card>
            
            <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <div className="text-3xl font-bold text-blue-700">$430B</div>
              <div className="text-sm text-blue-600 mt-1">Quy mô GDP (2023)</div>
              <div className="text-xs text-gray-500 mt-2">Đứng thứ 35 thế giới</div>
            </Card>
            
            <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <div className="text-3xl font-bold text-purple-700">$681B</div>
              <div className="text-sm text-purple-600 mt-1">Xuất nhập khẩu (2023)</div>
              <div className="text-xs text-gray-500 mt-2">Top 20 thương mại thế giới</div>
            </Card>
            
            <Card className="text-center bg-gradient-to-br from-red-50 to-red-100 border-red-200">
              <div className="text-3xl font-bold text-red-700">2.93%</div>
              <div className="text-sm text-red-600 mt-1">Tỷ lệ hộ nghèo (2023)</div>
              <div className="text-xs text-gray-500 mt-2">Giảm từ 58% (1993)</div>
            </Card>
          </div>
        </motion.div>

        {/* Economic Achievements */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="content-card mb-6">
            <h3 className="text-xl font-semibold text-primary mb-4">
              🏭 Thành tựu kinh tế nổi bật
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-700 mb-2">Tăng trưởng kinh tế</h5>
                  <p className="text-sm text-green-600">
                    • Tăng trưởng bình quân {'>'}6.5%/năm<br/>
                    • GDP tăng 95 lần so với 1986<br/>
                    • Lạm phát kiểm soát ~4%/năm
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-2">Xuất khẩu nông sản</h5>
                  <p className="text-sm text-blue-600">
                    • Xuất khẩu gạo {'>'}8.1 triệu tấn (2023)<br/>
                    • Nông sản có mặt tại 160+ quốc gia<br/>
                    • Từ thiếu lương thực → xuất khẩu hàng đầu
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-700 mb-2">Đầu tư nước ngoài</h5>
                  <p className="text-sm text-purple-600">
                    • Thu hút {'>'}$39.4 tỷ USD FDI (2023)<br/>
                    • Top 20 thế giới về thu hút FDI<br/>
                    • 40.8k dự án với $487 tỷ USD
                  </p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-orange-700 mb-2">Cơ cấu kinh tế</h5>
                  <p className="text-sm text-orange-600">
                    • Nông nghiệp chỉ còn ~12% GDP<br/>
                    • 900k doanh nghiệp hoạt động<br/>
                    • Trung tâm sản xuất toàn cầu
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Social Progress */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="content-card mb-6">
            <h3 className="text-xl font-semibold text-primary mb-4">
              👥 Tiến bộ xã hội
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gradient-to-b from-red-50 to-red-100 rounded-xl">
                <div className="text-3xl mb-2">📚</div>
                <h5 className="font-semibold text-red-700">Giáo dục</h5>
                <p className="text-sm text-red-600 mt-2">
                  68% lao động qua đào tạo (2023)<br/>
                  Tăng từ 49.14% (2014)
                </p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl">
                <div className="text-3xl mb-2">🏥</div>
                <h5 className="font-semibold text-blue-700">Y tế</h5>
                <p className="text-sm text-blue-600 mt-2">
                  93% tham gia BHYT<br/>
                  Tuổi thọ: 74.5 tuổi (2023)
                </p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-b from-green-50 to-green-100 rounded-xl">
                <div className="text-3xl mb-2">🌾</div>
                <h5 className="font-semibold text-green-700">Nông thôn mới</h5>
                <p className="text-sm text-green-600 mt-2">
                  78% xã đạt chuẩn<br/>
                  270 huyện NTM
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* International Position */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="content-card mb-6">
            <h3 className="text-xl font-semibold text-primary mb-4">
              🌍 Vị thế và Uy tín quốc tế
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-2">Quan hệ ngoại giao</h5>
                  <p className="text-sm text-blue-600">
                    • Quan hệ với 193 quốc gia<br/>
                    • Đối tác chiến lược với 30 quốc gia<br/>
                    • Quan hệ với tất cả 5 nước HĐBA LHQ
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-700 mb-2">Thương mại quốc tế</h5>
                  <p className="text-sm text-green-600">
                    • 16 FTA với 60+ quốc gia<br/>
                    • Thương mại với 230+ quốc gia<br/>
                    • Thành viên WTO, CPTPP, EVFTA
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-700 mb-2">Chỉ số quốc tế</h5>
                  <p className="text-sm text-purple-600">
                    • Chỉ số Hòa bình: 41/163 (tăng 4 bậc)<br/>
                    • Chỉ số Đổi mới sáng tạo: 46/132<br/>
                    • Chỉ số Hạnh phúc: 54/143 (tăng 11 bậc)
                  </p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-orange-700 mb-2">Di sản văn hóa</h5>
                  <p className="text-sm text-orange-600">
                    • 68 di sản UNESCO ghi danh<br/>
                    • Văn hóa là "hồn cốt dân tộc"<br/>
                    • Bảo tồn và phát huy bản sắc
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Anti-corruption Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="content-card mb-6">
            <h3 className="text-xl font-semibold text-primary mb-4">
              ⚖️ Chống tham nhũng và Xây dựng Đảng
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold text-red-700 mb-2">Thành tựu chống tham nhũng</h5>
                <p className="text-sm text-red-600">
                  • Chỉ số Cảm nhận Tham nhũng tăng 40 bậc<br/>
                  • Từ thứ 123 (2012) lên thứ 83/180 (2023)<br/>
                  • "Không có vùng cấm, không ngoại lệ"
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-700 mb-2">Xây dựng Đảng</h5>
                <p className="text-sm text-blue-600">
                  • "Danh dự là điều thiêng liêng, cao quý nhất"<br/>
                  • Đảng "là đạo đức, là văn minh"<br/>
                  • Tăng cường niềm tin của nhân dân
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Quiz Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <Quiz data={quizData} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default NhanDinh
