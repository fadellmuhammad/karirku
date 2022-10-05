const baseUrl = 'https://Karierku.herokuapp.com/'

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

const getRecommendation = async (role) => {
  return fetch(baseUrl + 'lowongan/reccomendation', {
    "method": 'POST',
    "body": JSON.stringify(
      {
        "RecommendationRole": role
      }
    )
  })
}


const getNewVacancy = async () =>{
  return fetch(baseUrl, {
    "method": 'GET'
  })
}

export {
  getQuiz,
  getVacancy,
  getNewVacancy,
  getRecommendation
}