import React, { useState } from 'react'
import { Card, Button, Radio, Alert } from 'antd'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'

const Quiz = ({ data }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    
    const correct = selectedAnswer === data.correctAnswer
    setIsCorrect(correct)
    setShowResult(true)
  }

  const handleReset = () => {
    setSelectedAnswer(null)
    setShowResult(false)
    setIsCorrect(false)
  }

  return (
    <Card className="content-card bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">🧠</span>
        <h3 className="text-xl font-semibold text-primary">Kiểm tra kiến thức</h3>
      </div>

      <div className="mb-6">
        <h4 className="font-medium text-gray-800 mb-4">{data.question}</h4>
        
        <Radio.Group 
          value={selectedAnswer} 
          onChange={(e) => setSelectedAnswer(e.target.value)}
          disabled={showResult}
          className="w-full"
        >
          <div className="space-y-3">
            {data.options.map((option, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: showResult ? 1 : 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Radio 
                  value={index} 
                  className={`w-full p-3 rounded-lg border transition-all duration-300 ${
                    showResult 
                      ? index === data.correctAnswer 
                        ? 'bg-green-50 border-green-300' 
                        : selectedAnswer === index && !isCorrect
                        ? 'bg-red-50 border-red-300'
                        : 'bg-gray-50 border-gray-200'
                      : selectedAnswer === index
                      ? 'bg-primary/10 border-primary'
                      : 'bg-white border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <span className={`ml-2 ${
                    showResult && index === data.correctAnswer 
                      ? 'text-green-700 font-medium' 
                      : showResult && selectedAnswer === index && !isCorrect
                      ? 'text-red-700'
                      : 'text-gray-700'
                  }`}>
                    {option}
                  </span>
                  {showResult && index === data.correctAnswer && (
                    <CheckCircleOutlined className="text-green-600 ml-2" />
                  )}
                  {showResult && selectedAnswer === index && !isCorrect && (
                    <CloseCircleOutlined className="text-red-600 ml-2" />
                  )}
                </Radio>
              </motion.div>
            ))}
          </div>
        </Radio.Group>
      </div>

      <div className="flex gap-3 mb-4">
        {!showResult ? (
          <Button 
            type="primary" 
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="bg-primary hover:bg-red-700"
          >
            Kiểm tra đáp án
          </Button>
        ) : (
          <Button onClick={handleReset} className="border-primary text-primary hover:bg-primary hover:text-white">
            Làm lại
          </Button>
        )}
      </div>

      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Alert
              message={isCorrect ? "Chính xác! 🎉" : "Chưa đúng! 🤔"}
              description={data.explanation}
              type={isCorrect ? "success" : "error"}
              showIcon
              className="rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}

export default Quiz
