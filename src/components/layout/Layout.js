import React from "react"
import Footer from "../footer/Footer"
import Header from "../header/Header"

const Layout = ({ content }) => {
  return (
    <>
      <Header />
      {content}
      <Footer />
    </>
  )
}

export default Layout