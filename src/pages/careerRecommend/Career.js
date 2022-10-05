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
            <h1>Apakah anda bingung dengan karir yang ingin dipilih?</h1>
            <p>Silakan ikuti test untuk melihat karir yang cocok dengan diri anda.</p>
            <p>Setelah Mengambil Test, anda juga akan mendapkan rekomendasi tempat magang yang sesuai dengan minat anda.</p>
            <button className="btn" onClick={() => getQuiz()}>Ambil Test</button>
          </div>
        </div>
      </div>
    </CareerWrapp>
  )
}

export default Career