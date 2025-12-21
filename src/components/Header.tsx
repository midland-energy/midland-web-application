import { useState } from "react"
import { Menu, X } from "lucide-react"
import "../styles/components/header.scss"
import logo from "../assets/MIDLAND-LOGO.png"

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
            <a href="#home" className="links">
              Home
            </a>
            <a href="#about" className="links">
              About
            </a>
            <a href="#projects" className="links">
              Energy Projects Gallery
            </a>
            <a href="#contact" className="links">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="header__cta">
            <button className="header-btn">Get a Quote</button>
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
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary transition-colors"
            >
              Energy Projects Gallery
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
            <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Get a Quote</button>
          </div>
        )}
      </nav>
    </header>
  )
}
