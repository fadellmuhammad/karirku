import React from "react"
import { HeaderWrapp } from "./Header.style"
import { image } from "../../assets/images"
import Navbar from "./Navbar"
import Menu from "./components/Menu"

const Header = () => {
  return (
    <HeaderWrapp>
      <div className="header">
        <div className="container">
          <div className="display-desktop">
            <div className="header-content">
              <img src={image.logo} alt="logo" className="logo" />
              <div className="display-desktop">
                <Menu />
              </div>
            </div>
          </div>
        </div>
        <div className="display-mobile">
          <div className="logo-mobile">
            <img src={image.logo} alt="logo" className="logo" />
          </div>
          <Navbar />
        </div>
      </div>
    </HeaderWrapp>
  )
}

export default Header