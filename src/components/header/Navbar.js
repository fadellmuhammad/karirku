import React from "react"
import { NavbarWrapp } from './Navbar.style'
import { slide as Menu } from 'react-burger-menu'
import MenuMobile from "./components/Menu"

const Navbar = () => {

  return (
    <NavbarWrapp>
      <Menu right>
        <MenuMobile/>
      </Menu>
    </NavbarWrapp>
  )
}

export default Navbar
