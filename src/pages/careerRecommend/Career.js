import React, { useState } from "react"
import { CareerWrapp } from "./Career.style"

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

const Career = () => {
  const [tes, setTes] = useState(true)

  return (
    <CareerWrapp>
      <div className="container">
        <div className="career">
          <div className="content">
            {
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
            }

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
    </CareerWrapp>
  )
}

export default Career