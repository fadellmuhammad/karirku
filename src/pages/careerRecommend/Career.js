import React from "react"
import { useNavigate } from "react-router-dom"
import { CareerWrapp } from "./Career.style"

const Career = () => {
  const navigate = useNavigate()

  const getQuiz = () => {
    navigate('/karir/quiz')
  }

  return (
    <CareerWrapp>
      <div className="container">
        <div className="career">
          <div className="content">
            <h1>Silakan melakukan test</h1>
            <button className="btn" onClick={() => getQuiz()}>Test</button>
          </div>
        </div>
      </div>
    </CareerWrapp>
  )
}

export default Career