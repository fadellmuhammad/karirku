import React from "react"
import { Link } from "react-router-dom"
import { slide as Menu } from "react-burger-menu"

const MenuMobile = () => {
  return (
    // <Menu>
      <ul className="list">
        <li><Link to='/karir'>Rekomendasi Karir</Link></li>
        <li><Link to='/lowongan'>Lowongan</Link></li>
        <li><Link to='/'>Beranda</Link></li>
      </ul>
    // </Menu>
    // <Menu {...props}>
    //   <Link to='/karir'>Rekomendasi Karir</Link>
    //   <Link to='/lowongan'>Lowongan</Link>
    //   <Link to='/'>Beranda</Link>
    // </Menu>
  )
}

export default MenuMobile