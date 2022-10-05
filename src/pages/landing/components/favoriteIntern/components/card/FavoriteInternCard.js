import React from "react"
import { FavoriteInternCardWrapp } from "./FavoriteInternCard.style"

const FavoriteInternCard = ({vacancy}) => {
  const {Company, ImageUrl, Position} = vacancy
  return (
    <FavoriteInternCardWrapp>
      <div className="intern-card">
        <div className="content">
          <div className="logo-company">
            <img src={ImageUrl} alt="" />
          </div>
          <div className="container-title">
            <h1 className="company">{Company}</h1>
            <h1 className="role">{Position}</h1>
          </div>
        </div>
      </div>
    </FavoriteInternCardWrapp>
  )
}

export default FavoriteInternCard
