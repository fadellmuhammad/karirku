import React from "react"
import { image } from "../../assets/images"
import { HeaderWrapp } from "./Header.style"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderWrapp>
      <div className="header">
        <div className="container">
          <div className="header-content">
            <img src={image.logo} alt="logo" className="logo" />
            <ul className="list">
              <li><Link to='/karir'>Rekomendasi Karir</Link></li>
              <li><Link to='/lowongan'>Lowongan</Link></li>
              <li><Link to='/'>Beranda</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </HeaderWrapp>
  )
}

export default Header