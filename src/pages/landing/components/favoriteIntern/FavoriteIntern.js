import React from "react"
import { FavoriteInternWrapp } from "./FavoriteIntern.style"
import FavoriteInternCard from "./components/card/FavoriteInternCard"

const FavoriteIntern = () => {
  return (
    <FavoriteInternWrapp>
      <div className="container">
        <div className="favorite-intern">
          <h1 className="title">Tempat Magang Favorite</h1>
          <div className="favintern-card-container">
            <div data-aos="fade-up" data-aos-offset="10">
              <FavoriteInternCard />
            </div>
            <div data-aos="fade-up" data-aos-offset="10">
              <FavoriteInternCard />
            </div>
            <div data-aos="fade-up" data-aos-offset="10">
              <FavoriteInternCard />
            </div>
          </div>
        </div>
      </div>
    </FavoriteInternWrapp>
  )
}

export default FavoriteIntern