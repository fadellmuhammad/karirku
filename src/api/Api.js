import Axios from 'axios'

const baseUrl = 'http://Karierku.herokuapp.com/'

const getQuiz = async ({id, isLast}) => {
  return  fetch(baseUrl + 'quiz', {
    "method": 'POST',
    "body": JSON.stringify(
      {
        "id": id,
        "isLast": isLast
      }
    )
  })
}

const getVacancy = async () => {
  return fetch(baseUrl + 'lowongan', {
    "method": 'GET'
  })
}

export {
  getQuiz,
  getVacancy
}