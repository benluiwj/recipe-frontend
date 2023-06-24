import { useState } from "react"
import { DarkModeToggle } from "@/components/DarkModeToggle"
import { BRANDNAME } from "@/data"

import "@/styles/components/Layout.scss"
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
    <>
      <nav className="navbar " aria-label="main navigation">
        <div className="navbar-brand ">
          <h1 className="title is-3 ml">{BRANDNAME}</h1>
          <div className="icon-wrapper">
            <DarkModeToggle />
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
            {isNil(user) ? (
              <></>
            ) : (
              <p className="navbar-item">this is a navbar item</p>
            )}
            <div className="navbar-item">
              <div className="darkmode-wrapper">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  )
}
