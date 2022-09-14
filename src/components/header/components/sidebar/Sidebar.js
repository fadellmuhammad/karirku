import React from "react"
import { Link } from "react-router-dom"
import { slide as Menu } from "react-burger-menu"
import { SidebarWrapp } from "./Sidebar.style"

const Sidebar = (props) => {
  return (
    // <SidebarWrapp>
      <Menu {...props}>
        <a href="/" className="menu-item">Rekomendasi Karir</a>
        {/* <Link to='/lowongan'  className="menu-item">Lowongan</Link> */}
        {/* <Link to='/'  className="menu-item">Beranda</Link> */}
      </Menu>
    // </SidebarWrapp>
  )
}

export default Sidebar