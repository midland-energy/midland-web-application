import { useState } from "react"
import { Menu, X } from "lucide-react"
import "../styles/components/header.scss"
import logo from "../assets/MIDLAND-LOGO.png"
import { NavLink } from "react-router-dom"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__container">
          {/* Logo */}
          <div className="header__logo">
            <div>
              <img src={logo} alt="MidlandAfrica" />
            </div>
            <span>MidlandAfrica</span>
          </div>

          {/* Desktop Navigation */}
          <div className="header__links">
            <NavLink className="links" to={"/"}>
                Home
            </NavLink>
            <NavLink className="links" to={"/about"}>
                About
            </NavLink>
            <NavLink className="links" to={"/projects"}>
                Energy Projects Gallery
            </NavLink>
            <NavLink className="links" to={"/contact"}>
                Contact
            </NavLink>
          </div>

          {/* CTA Button */}
          <div className="header__cta">
            <button className="header-btn">
              <NavLink className="links" style={{color: "white"}} to={"/contact"}>
                Get a Quote
              </NavLink>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="header__mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="header__mobile-menu">
            <NavLink className="links" to={"/"} onClick={() => setMobileMenuOpen(false)}>
                Home
            </NavLink>
            <NavLink className="links" to={"/about"} onClick={() => setMobileMenuOpen(false)}>
                About
            </NavLink>
            <NavLink className="links" to={"/projects"} onClick={() => setMobileMenuOpen(false)}>
                Energy Project Gallery
            </NavLink>
            <NavLink className="links" to={"/contact"} onClick={() => setMobileMenuOpen(false)}>
                Contact
            </NavLink>
            <button className="header-btn">Get a Quote</button>
          </div>
        )}
      </nav>
    </header>
  )
}
