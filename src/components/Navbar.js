import React from "react"
import { FaCoffee } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import { GiRaspberry } from "react-icons/gi"
import { Link } from "gatsby"

export default function Navbar({ isOpen, toggleSidebar, closeSidebar }) {
  return (
    <nav>
      {isOpen ? (
        <AiOutlineClose
          className="nav-toggle pulse"
          onClick={() => closeSidebar()}
        />
      ) : (
        <FaCoffee
          className="nav-toggle pulse"
          onClick={() => toggleSidebar()}
        />
      )}
      <Link to="/">
        <GiRaspberry className="nav-logo pulse" />
      </Link>
    </nav>
  )
}
