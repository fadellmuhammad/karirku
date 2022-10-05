import React from "react"
import { Link } from "react-router-dom"

const MenuMobile = () => {
  return (
    <ul className="list">
      <li><Link to='/karir'>Temukan Minat</Link></li>
      <li><Link to='/lowongan'>Lowongan</Link></li>
      <li><Link to='/'>Beranda</Link></li>
    </ul>
  )
}

export default MenuMobile