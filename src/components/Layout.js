import React, { useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

export default function Layout({ children }) {
  const [isColor, setColor] = useState(false)
  const [isActive, setActive] = useState(false)
  function toggleSidebar() {
    console.log("click")
    setActive(!isActive)
    setColor(!isColor)
  }

  return (
    <>
      <div className="grid-container">
        <div className={isColor ? "navbar bkg-color fadeIn" : "navbar"}>
          <Navbar toggleSidebar={toggleSidebar} />
        </div>
        <div className={isActive ? " main-open fadeIn" : " main-closed"}>
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="children">{children}</div>
        </div>
        <div className={isColor ? "footer bkg-color fadeIn" : "footer"}>
          {" "}
          <Footer />
        </div>
      </div>
    </>
  )
}
