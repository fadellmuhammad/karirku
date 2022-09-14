import React from "react"
import { HeaderWrapp } from "./Header.style"
import { image } from "../../assets/images"
import MenuMobile from "./components/Menu"
// import Sidebar from "./components/sidebar/Sidebar"

const Header = () => {
  return (
    <HeaderWrapp>
      <div className="header">
        <div className="container">
          <div className="header-content">
            <img src={image.logo} alt="logo" className="logo" />
            <div className="display-desktop">
              {/* <Sidebar /> */}
              <MenuMobile/>
            </div>
            <div className="display-mobile">
              <div className="display-mobile" id="menu">
                {/* <Sidebar pageWrapId={"page-wrap"} outerContainerId={"menu"} /> */}
                {/* </div> */}
                {/* <div id="page-wrap"></div> */}
                <div className="hamburger">
                  <img src={image.hamburger} alt="hamburger"/>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderWrapp>
  )
}

export default Header