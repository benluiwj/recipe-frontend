import { useState } from "react"
import { DarkModeToggle } from "@/components/DarkModeToggle"
import { BRANDNAME } from "@/data"

import "@/styles/components/navbar/Navbar.scss"
import "@/styles/components/navbar/Navbar.dark.scss"
import { useAuthContext } from "@/context/authContext"
import { isNil } from "lodash"

type Props = {
  children?: React.ReactNode
}

export default function Layout({ children }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { user } = useAuthContext()

  const handleNavBar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="app">
      <nav className="navbar " aria-label="main navigation">
        <div className="navbar-brand ">
          <h1 className="title brand-title">{BRANDNAME}</h1>
          <div className="icon-wrapper">
            <DarkModeToggle />
            {user && (
              <button className="button profile">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
              </button>
            )}
          </div>
          <button
            className={isOpen ? "navbar-burger is-active" : "navbar-burger"}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
            onClick={handleNavBar}
          >
            <span aria-hidden="false"></span>
            <span aria-hidden="false"></span>
            <span aria-hidden="false"></span>
          </button>
        </div>

        <div
          className={isOpen ? "navbar-menu is-active" : "navbar-menu"}
          id="navbar"
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="darkmode-wrapper">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  )
}
