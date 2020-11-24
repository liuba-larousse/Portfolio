import React from "react"
import { AiOutlineClose } from "react-icons/ai"
import { GiCutDiamond } from "react-icons/gi"

import s from "./NavbarStyles.module.scss"

export default function Navbar({ isOpen, toggleSidebar, closeSidebar }) {
  return (
    <nav>
      {isOpen ? (
        <AiOutlineClose
          className={s.nav_toggle}
          onClick={() => closeSidebar()}
        />
      ) : (
        <GiCutDiamond
          className={s.nav_toggle}
          onClick={() => toggleSidebar()}
        />
      )}
      {/* <Link to="/">
        <GiRaspberry className={s.nav_logo} />
      </Link> */}
    </nav>
  )
}
