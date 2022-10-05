import React from "react"
import { slide as Menu } from "react-burger-menu"

const Sidebar = (props) => {
  return (
      <Menu {...props}>
        <a href="/" className="menu-item">Rekomendasi Karir</a>
      </Menu>
  )
}

export default Sidebar