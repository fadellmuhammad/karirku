import React from "react"
import { image } from "../../assets/images"
import { FooterWrapp } from "./Footer.style"

const Footer = () => {
  return (
    <FooterWrapp>
      <div className="footer">
        <div className="container">
          <div className="content-footer">
            <div className="about">
              <div className="logo">
                <img src={image.logo} alt="" />
                <h1>KarirKu</h1>
              </div>
              <p>Platform pencarian magang sesuai dengan kemampuan dan minat</p>
              <div className="logos">
                <img src={image.icon_instagram} alt="" />
                <img src={image.icon_linkedin} alt="" />
                <p className="text">KarirKu</p>
              </div>
            </div>
            <div className="navigation">
              <h1>Navigasi</h1>
              <ul>
                <li> <a href="/">Rekomendasi Karir</a></li>
                <li> <a href="/">Lowongan</a></li>
              </ul>
            </div>
            <div className="address">
              <h1>Address</h1>
              <p>Jalan srijaya negara, lorong jaya sampurna no.22 bukit lama, palembang</p>
            </div>
          </div>
          <h1 className="copyright"> &copy; 2022 Copyright KarirKu</h1>
        </div>
      </div>
    </FooterWrapp>
  )
}

export default Footer