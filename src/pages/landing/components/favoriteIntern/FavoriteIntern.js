import React from "react"
import { FavoriteInternWrapp } from "./FavoriteIntern.style"
import FavoriteInternCard from "./components/card/FavoriteInternCard"
import { getNewVacancy } from "../../../../api/Api"
import { useState } from "react"
import { useEffect } from "react"
import ReactLoading from 'react-loading'

const FavoriteIntern = () => {
  const [newVacancy, setNewVacancy] = useState()

  useEffect(() => {
    getNewVacancy()
      .then(res => res.json())
      .then(res => setNewVacancy(res.ListOfVacancies))
  }, [])


  return (
    <FavoriteInternWrapp>
      <div className="container">
        <div className="favorite-intern">
          <h1 className="title">Tempat Magang Favorite</h1>
          <div className="favintern-card-container">
            {
              !newVacancy ? 
              <div className="spin-load">
              <ReactLoading type="bubbles" color="#424242" height={70} width={70} />
            </div> : newVacancy?.filter((res, idx) => idx < 3).map(res => (
                <div data-aos="fade-up" data-aos-offset="10">
                  <FavoriteInternCard vacancy={res} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </FavoriteInternWrapp>
  )
}

export default FavoriteIntern