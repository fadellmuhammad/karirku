import React, { useEffect, useState } from "react"
import { getQuiz } from '../../api/Api'
import { QuizWrapp } from "./Quiz.style"

const data = [
  {
    id: 1,
    quest: 'pilihlah bidang yang anda sukai',
    answers: [
      {
        answer: 'front end'
      },
      {
        answer: 'front end'
      },
      {
        answer: 'front end'
      }
    ]
  },
  {
    id: 2,
    quest: 'apakah anda suka',
    answers: [
      {
        answer: 'bek end'
      },
      {
        answer: 'bek end'
      },
      {
        answer: 'bek end'
      }
    ]
  }
]

const Quiz = () => {
  const [quiz, setQuiz] = useState()
  const [req, setReq] = useState({
    id: 0,
    isLast: false
  })

  useEffect(() => {
    getQuiz(req).then(res => res.json()).then(res => setQuiz(res))
  }, [req])

  return (
    <QuizWrapp>
      <div className="container">
        <div className="quiz">
          <div className="content">
            <h1 className="question">{quiz?.Question}</h1>
            <div className="answers">
              <ul>
                {
                  quiz?.Options?.map(res => (
                    <li className="answer" onClick={() => setReq({id: res.Id, isLast: quiz.IsLast})}>{res.Text}</li>
                  ))
                  // console.log(quiz)
                  // data[0].answers.map(res => (
                  //   <li className="answer" onClick={() => setTes(false)}>{res.answer}</li>
                  // ))
                }
              </ul>
            </div>
            {/* {
              tes ? <>
                <h1 className="question">{data[0].quest}</h1>
                <div className="answers">
                  <ul>
                    {
                      data[0].answers.map(res => (
                        <li className="answer" onClick={() => setTes(false)}>{res.answer}</li>
                      ))
                    }
                  </ul>
                </div>
              </> : <>
                <h1 className="question">{data[1].quest}</h1>
                <div className="answers">
                  <ul>
                    {
                      data[1].answers.map(res => (
                        <li className="answer">{res.answer}</li>
                      ))
                    }
                  </ul>
                </div>
              </>
            } */}

            {/* <h1 className="question">Pilihlah Bidang yang anda sukai</h1>
            <div className="answers">
              <ul>
                <li className="answer">front End Developer</li>
                <li className="answer">front End Developer</li>
                <li className="answer">front End Developer</li>
                <li className="answer">front End Developer</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </QuizWrapp>
  )
}

export default Quiz