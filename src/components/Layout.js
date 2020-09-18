import React, { useState, useRef, useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

export default function Layout({ children }) {
  const ref = useRef()
  const [isOpen, setOpen] = useState(false)
  useOnClickOutside(ref, () => setOpen(false))
  console.log(ref)
  function toggleSidebar() {
    setOpen(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }
  function closeSidebar() {
    setOpen(false)
  }
  return (
    <>
      <div className="grid-container">
        <div className="navbar">
          <Navbar
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
            closeSidebar={closeSidebar}
          />
        </div>
        <div className="main">
          {isOpen && (
            <div ref={ref} className="sidebar">
              <Sidebar />
            </div>
          )}
          <div
            className={isOpen ? " children backdrop-blur fadeIn" : " children"}
          >
            {children}
          </div>
        </div>
        <div className="footer">
          {" "}
          <Footer />
        </div>
      </div>
    </>
  )
}

// Hook
function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }

        handler(event)
      }

      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)

      return () => {
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("touchstart", listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  )
}
