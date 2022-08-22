import React from "react"
import { image } from "../../assets/images"
import FavoriteIntern from "./components/favoriteIntern/FavoriteIntern"
import Testimonial from "./components/testimonial/Testimonial"
import { LandingWrapp } from "./Landing.style"

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
                  <button>Coba Sekarang</button>
                  <div className="info">
                    <h1>50 +</h1>
                    <p>Info Lowongan</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="right">
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
