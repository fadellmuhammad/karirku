import React from "react"
import FavoriteIntern from "./components/favoriteIntern/FavoriteIntern"
import Testimonial from "./components/testimonial/Testimonial"
import { image } from "../../assets/images"
import { LandingWrapp } from "./Landing.style"
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <LandingWrapp>
      <div className="background-color">
        <div className="container">
          <div className="landing">
            <div data-aos="fade-right" className="left">
              <div className="content">
                <h1 className="title">Pilih Tempat Magang di <span>KarirKu</span></h1>
                <p className="desc">Masih bingung kamu cocok di bidang apa?
                  Disini kamu bisa mencari tahunya</p>
                <div className="section">
                  <button><Link to="/karir" className="link-btn">Coba Sekarang</Link></button>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="background-image">
                <div className="image">
                  <img src={image.image_ilustration} alt='image_ilustration' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FavoriteIntern />
      <Testimonial />
    </LandingWrapp>
  )
}

export default Landing
