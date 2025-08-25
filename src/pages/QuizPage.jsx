import React, { useState } from 'react'
import { Card, Button, Select, Divider } from 'antd'
import { motion, AnimatePresence } from 'framer-motion'
import Quiz from '../components/Quiz'

const QuizPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState('baocap')

  const quizzes = {
    baocap: {
      title: "Thời kì Bao cấp (1975-1986)",
      icon: "🎫",
      data: {
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
    },
    doimoi: {
      title: "Thành tựu Đổi mới (1986 - nay)",
      icon: "📊",
      data: {
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
    },
    nhandinh: {
      title: "Thành tựu Việt Nam sau gần 40 năm Đổi mới",
      icon: "🇻🇳",
      data: {
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
    },
    timeline: {
      title: "Timeline Lịch sử Việt Nam",
      icon: "⏳",
      data: {
        question: "Sự kiện nào đánh dấu bước ngoặt quan trọng nhất trong lịch sử Việt Nam hiện đại?",
        options: [
          "Chiến thắng Điện Biên Phủ (1954)",
          "Thống nhất đất nước (1975)",
          "Đổi mới kinh tế (1986)",
          "Tất cả đều quan trọng"
        ],
        correctAnswer: 3,
        explanation: "Mỗi sự kiện đều có ý nghĩa lịch sử quan trọng: 1954 mở ra độc lập, 1975 thống nhất đất nước, 1986 đổi mới phát triển. Tất cả đều là những bước ngoặt then chốt."
      }
    }
  }

  const currentQuiz = quizzes[selectedQuiz]

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-header">Kiểm tra kiến thức</h1>
        <div className="section-quote">
          "Học mà không nghĩ thì vô ích, nghĩ mà không học thì nguy hiểm"
        </div>

        {/* Quiz Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="content-card">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">📚</span>
              <h3 className="text-xl font-semibold text-primary">Chọn chủ đề kiểm tra</h3>
            </div>
            
            <Select
              value={selectedQuiz}
              onChange={setSelectedQuiz}
              className="w-full"
              size="large"
              placeholder="Chọn chủ đề để kiểm tra kiến thức"
            >
              {Object.entries(quizzes).map(([key, quiz]) => (
                <Select.Option key={key} value={key}>
                  <div className="flex items-center">
                    <span className="mr-2">{quiz.icon}</span>
                    {quiz.title}
                  </div>
                </Select.Option>
              ))}
            </Select>
          </Card>
        </motion.div>

        {/* Current Quiz Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedQuiz}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <Card className="content-card bg-gradient-to-r from-primary/5 to-accent/5 border-l-4 border-primary">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{currentQuiz.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-primary">{currentQuiz.title}</h2>
                    <p className="text-gray-600 mt-1">Kiểm tra hiểu biết của bạn về chủ đề này</p>
                  </div>
                </div>
              </Card>
            </div>

            <Quiz data={currentQuiz.data} />
          </motion.div>
        </AnimatePresence>

        {/* Quiz Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Card className="content-card">
            <h3 className="text-xl font-semibold text-primary mb-4">
              📈 Thống kê câu hỏi
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {Object.entries(quizzes).map(([key, quiz]) => (
                <div
                  key={key}
                  className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    selectedQuiz === key
                      ? 'border-primary bg-primary/10'
                      : 'border-gray-200 bg-gray-50 hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedQuiz(key)}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{quiz.icon}</div>
                    <h5 className="font-semibold text-sm text-gray-700 mb-1">
                      {quiz.title.split(' ')[0]} {quiz.title.split(' ')[1]}
                    </h5>
                    <p className="text-xs text-gray-500">
                      {quiz.data.options.length} lựa chọn
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <Divider />
            
            <div className="text-center text-sm text-gray-600">
              <p>
                <strong>Tổng cộng:</strong> {Object.keys(quizzes).length} bộ câu hỏi về lịch sử Việt Nam
              </p>
              <p className="mt-2">
                Hãy thử sức với tất cả các chủ đề để kiểm tra kiến thức của bạn! 🎯
              </p>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default QuizPage
