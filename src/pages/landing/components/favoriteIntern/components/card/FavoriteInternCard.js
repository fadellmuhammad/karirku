import React from "react"
import { image } from "../../../../../../assets/images"
import { FavoriteInternCardWrapp } from "./FavoriteInternCard.style"

const FavoriteInternCard = () => {
  return (
    <FavoriteInternCardWrapp>
      <div className="intern-card">
        <div className="content">
          <div className="logo-company">
            <img src={image.dummy_logo_company} alt="" />
          </div>
          <div className="container-title">
            <h1 className="role">Front End Developer</h1> <hr />
            <h1 className="company">Tokopedi</h1>
          </div>
        </div>
      </div>
    </FavoriteInternCardWrapp>
  )
}

export default FavoriteInternCard
