import React from "react"
import { FaCoffee } from "react-icons/fa"
import { GiRaspberry } from "react-icons/gi"
import { Link } from "gatsby"

export default function Navbar({ toggleSidebar }) {
  return (
    <nav>
      <FaCoffee className="nav-toggle pulse" onClick={() => toggleSidebar()} />
      <Link to="/">
        <GiRaspberry className="nav-logo pulse" />
      </Link>
    </nav>
  )
}
