import React, { useEffect, useState } from "react"
import { getQuiz, getRecommendation } from '../../api/Api'
import { QuizWrapp } from "./Quiz.style"
import ReactLoading from 'react-loading'
import { useNavigate } from "react-router-dom"

const Quiz = () => {
  const [quiz, setQuiz] = useState()
  const [openButton, setOpenButton] = useState(false)
  const [openResult, setOpenResult] = useState(false)
  const [lastIdQuiz, setLastIdQuiz] = useState()
  const [recommendation, setRecommendation] = useState()
  const [req, setReq] = useState({
    id: 0,
    isLast: false
  })
  const navigate = useNavigate()

  useEffect(() => {
    if (!req.isLast) {
      getQuiz(req).then(res => res.json()).then(res => setQuiz(res))
    } else {
      setOpenButton(true)
    }
  }, [req])

  const handleClickQuiz = (idQuiz, Islast) => {
    if (Islast === true) {
      setLastIdQuiz(idQuiz)
    }
    setReq({ id: idQuiz, isLast: Islast })
  }

  const result = () => {
    getQuiz({ id: lastIdQuiz, isLast: quiz.IsLast })
      .then(res => res.json())
      .then(res => setRecommendation(res))
    setOpenResult(true)
  }

  const getRecommend = (role) => {
    getRecommendation(role)
      .then(res => res.json())
      .then(res => navigate(`/lowongan`, { state: { res } }))
  }

  return (
    <QuizWrapp>
      <div className="container">
        <div className="quiz">
          <div className="content">

            {
              openResult ?
                <>
                  {
                    !recommendation ?
                      <div className="spin-load">
                        <ReactLoading className="center" type="bubbles" color="#424242" height={70} width={70} />
                      </div> :
                      <div className="recommend">
                        <p>Karir ini sesuai dengan minat anda.</p>
                        <h4 className="rec_role">- {recommendation.RecommendationRole}</h4>
                        <p>Berikut Skill yang harus anda pelajari dan kuasai untuk bisa berkarir di bidang ini.</p>
                        {
                          recommendation.RecomendationHardSkills.map(res => <h4>- {res}</h4>)
                        }
                        <button className="btn-rec" onClick={() => getRecommend(recommendation.RecommendationRole)}>Lihat lowongan yang sesuai</button>
                      </div>
                  }
                </>
                : <>
                  <h1 className="question">{quiz?.Question}</h1>
                  <div className="answers">
                    <ul>
                      {
                        !quiz ?
                          <div className="spin-load">
                            <ReactLoading className="center" type="bubbles" color="#424242" height={70} width={70} />
                          </div> :
                          quiz?.Options?.map(res => {
                            return <li className="answer" onClick={() => handleClickQuiz(res.Id, quiz.IsLast)}>{res.Text}</li>
                          })
                      }
                    </ul>
                    {
                      openButton ? <div className="result"><button className="btn-result" onClick={() => result()}>Lihat Hasil</button></div> : ''
                    }
                  </div>
                </>
            }

          </div>
        </div>
      </div>
    </QuizWrapp>
  )
}

export default Quiz