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
            <div data-aos="fade-up" data-aos-offset="50" data-aos-duration="200">
              <FavoriteInternCard />
            </div>
            <div data-aos="fade-up" data-aos-offset="50" data-aos-duration="400">
              <FavoriteInternCard />
            </div>
            <div data-aos="fade-up" data-aos-offset="50" data-aos-duration="600">
              <FavoriteInternCard />
            </div>
            <div data-aos="fade-up" data-aos-offset="50" data-aos-duration="800">
              <FavoriteInternCard />
            </div>
            {/* <FavoriteInternCard />
            <FavoriteInternCard />
            <FavoriteInternCard /> */}
          </div>
        </div>
      </div>
    </FavoriteInternWrapp>
  )
}

export default FavoriteIntern