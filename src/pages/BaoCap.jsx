import React from 'react'
import { Card, Tooltip } from 'antd'
import { motion } from 'framer-motion'
import Quiz from '../components/Quiz'

const BaoCap = () => {
  const quizData = {
    question: "Đặc trưng nổi bật của thời kì bao cấp là gì?",
    options: [
      "Kinh tế thị trường tự do",
      "Hệ thống tem phiếu và sổ gạo",
      "Đầu tư nước ngoài mạnh mẽ",
      "Xuất khẩu hàng hóa phong phú"
    ],
    correctAnswer: 1,
    explanation: "Thời kì bao cấp được đặc trưng bởi hệ thống phân phối theo tem phiếu và sổ gạo, phản ánh tình trạng thiếu hụt hàng hóa và cơ chế quản lý tập trung."
  }

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-header">Thời kì Bao cấp (1975-1986)</h1>
        <div className="section-quote">
          "Thời kì bao cấp là giai đoạn khó khăn nhưng cần thiết trong quá trình xây dựng chủ nghĩa xã hội ở Việt Nam"
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Đặc trưng Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="content-card h-full">
              <h3 className="text-xl font-semibold text-primary mb-4">
                🎫 Đặc trưng thời kì bao cấp
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Tooltip title="Tem phiếu được sử dụng để mua các mặt hàng thiết yếu">
                    <div className="w-16 h-12 bg-yellow-100 border-2 border-dashed border-yellow-400 rounded flex items-center justify-center text-xs font-bold">
                      TEM
                    </div>
                  </Tooltip>
                  <div>
                    <p className="font-medium">Hệ thống tem phiếu</p>
                    <p className="text-sm text-gray-600">Phân phối hàng hóa theo định mức</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Tooltip title="Sổ gạo ghi chép việc phân phối lương thực cho từng hộ gia đình">
                    <div className="w-16 h-12 bg-blue-100 border-2 border-blue-400 rounded flex items-center justify-center text-xs font-bold">
                      SỔ GẠO
                    </div>
                  </Tooltip>
                  <div>
                    <p className="font-medium">Sổ gạo, sổ thịt</p>
                    <p className="text-sm text-gray-600">Quản lý phân phối lương thực</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Đặc điểm:</strong> Kinh tế kế hoạch hóa tập trung, 
                    phân phối theo nhu cầu, hạn chế thương mại tự do.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Khó khăn Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="content-card h-full">
              <h3 className="text-xl font-semibold text-primary mb-4">
                ⚠️ Khó khăn và thách thức
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-medium text-red-700">Thiếu hụt hàng hóa</h4>
                  <p className="text-sm text-gray-600">
                    Thiếu lương thực, hàng tiêu dùng, nguyên liệu sản xuất
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-medium text-orange-700">Cơ chế quan liêu</h4>
                  <p className="text-sm text-gray-600">
                    Thủ tục phức tạp, hiệu quả sản xuất thấp
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-medium text-yellow-700">Hạn chế sáng tạo</h4>
                  <p className="text-sm text-gray-600">
                    Thiếu động lực cá nhân, ít đổi mới công nghệ
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-red-800">
                    <strong>Hệ quả:</strong> Đời sống nhân dân khó khăn, 
                    kinh tế phát triển chậm, cần có sự đổi mới.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Hình ảnh minh họa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Card className="content-card">
            <h3 className="text-xl font-semibold text-primary mb-4">
              📸 Hình ảnh thời kì bao cấp
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Tooltip title="Người dân xếp hàng mua hàng theo tem phiếu">
                <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
                  <span className="text-gray-600">🏪 Hàng dài mua hàng</span>
                </div>
              </Tooltip>
              
              <Tooltip title="Tem phiếu các loại: gạo, thịt, đường, vải...">
                <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
                  <span className="text-gray-600">🎫 Tem phiếu đa dạng</span>
                </div>
              </Tooltip>
              
              <Tooltip title="Cửa hàng quốc doanh thời bao cấp">
                <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
                  <span className="text-gray-600">🏢 Cửa hàng quốc doanh</span>
                </div>
              </Tooltip>
            </div>
          </Card>
        </motion.div>

        {/* Quiz Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <Quiz data={quizData} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default BaoCap
