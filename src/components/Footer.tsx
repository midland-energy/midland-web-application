import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import "../styles/components/footer.scss"
import logo from "../assets/MIDLAND-LOGO.png"
import { NavLink } from "react-router-dom"

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Company Info */}
          <div className="footer__company">
            <div className="footer__logo">
              <div className="w-8 h-8 relative">
                <img src={logo} alt="MidlandAfrica" className="w-full h-full object-contain" />
              </div>
              <span className="font-semibold text-lg">MidlandAfrica</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Driving sustainability through innovative solar solutions, green energy management, and eco-friendly
              construction practices.
            </p>
            <div className="footer__socials">
              <a href="https://www.linkedin.com/company/midland-construction-and-energy-nig-ltd/posts/?feedView=all" target="_blank"
                rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/midland_africa" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61577943440667&_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/midland_africa/#" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink className="links" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="links" to={"/about"}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="links" to={"/projects"}>
                  Energy Projects Gallery
                </NavLink>
              </li>
              <li>
                <NavLink className="links" to={"/contact"}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__section">
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Solar Installations
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Energy Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Energy Audits
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Battery Storage Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Maintenance & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer__newsletter">
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Subscribe to our newsletter for the latest updates on renewable energy
            </p>
            <div className="footer__newsletter-form space-y-2">
              <input type="email" placeholder="Your email address" className="email-input"/>
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom pt-8 border-t border-primary-foreground/20">
          <div className="footer__bottom-content flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <div>© 2025 - MidlandAfrica. All rights reserved</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
