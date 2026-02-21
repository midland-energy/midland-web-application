import { useState } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import "../styles/pages/contact.scss"
import { Phone, Mail, MapPin, Instagram, Twitter, Linkedin, Facebook } from "lucide-react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase"


export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    adress: "",
    package: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    console.log(formData)
    e.preventDefault()

    try {
      await addDoc(collection(db, "messages"), {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        adress: formData.adress,
        message: formData.message,
        package: formData.package,
        createdAt: serverTimestamp()
      })

      alert("Message sent successfully!")
      setFormData({ fullName: "", email: "", phone: "", adress: "", package: "", message: "" })
    } catch (error) {
      console.error(error)
      alert("Failed to send message.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="contact-page">
      {/* --- SEO TAGS (React 19 Native) --- */}
      <title>Contact Midland Energies | Get a Solar Quote in Lagos, Nigeria</title>
      <meta 
        name="description" 
        content="Ready to switch to sustainable energy? Contact Midland Energies in Ajah, Lagos. Get a custom quote for our solar packages or discuss your construction project." 
      />
      <meta name="keywords" content="Contact Midland Africa, Solar energy quote Lagos, Renewable energy company Nigeria, Solar panel installation Ajah" />

      {/* Social Media Previews */}
      <meta property="og:title" content="Contact Midland Energies | Sustainable Energy Experts" />
      <meta property="og:description" content="Talk to our team about residential and commercial solar solutions in Nigeria." />
      <meta property="og:type" content="website" />

      <Header />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero__overlay">
          <div className="contact-hero__content">
            <h1 className="contact-hero__title">Contact Us</h1>
            <p className="contact-hero__subtitle">
              Let's Build the Future Together. Reach out to discuss your sustainable energy and construction needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="contact-content__container">
          {/* Contact Form */}
          <div className="contact-form">
            <h2 className="contact-form__title">Get In Touch</h2>
            <p className="contact-form__description">
              Fill out the form below, and one of our experts will get back to you within 24 hours to discuss your
              project.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Smith"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form__group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="subject">Phone Number</label>
                  <input
                    type="text"
                    id="subject"
                    name="phone"
                    placeholder="How can we help you?"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form__group">
                  <label htmlFor="subject">Adress</label>
                  <input
                    type="text"
                    id="subject"
                    name="adress"
                    placeholder="How can we help you?"
                    value={formData.adress}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-form__group">
                  <label htmlFor="subject">Interested Package</label>
                  <input
                    type="text"
                    id="subject"
                    name="package"
                    placeholder="How can we help you?"
                    value={formData.package}
                    onChange={handleChange}
                    required
                  />
              </div>

              <div className="contact-form__group">
                <label htmlFor="message">Additional Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>

              <button type="submit" className="contact-form__submit">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-info__section">
              <h3 className="contact-info__heading">Contact Information</h3>

              <div className="contact-info__items">
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <Phone size={20} />
                  </div>
                  <div className="contact-info__details">
                    <h4>Phone</h4>
                    <p>0814 557 4794</p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-info__details">
                    <h4>Email</h4>
                    <p>operations@midlandafrica.com</p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-info__details">
                    <h4>Address</h4>
                    <p>
                      8, Peregrino Close, Rockstoneville Estate, Ajah Lagos
                      <br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-info__section">
              <h3 className="contact-info__heading">Office Hours</h3>

              <div className="contact-info__hours">
                <div className="contact-info__hour-item">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="contact-info__hour-item">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="contact-info__hour-item">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="contact-info__section">
              <h3 className="contact-info__heading">Connect With Us</h3>

              <div className="contact-info__socials">
                <a href="https://www.linkedin.com/company/midland-construction-and-energy-nig-ltd/posts/?feedView=all" className="contact-info__social" aria-label="Website">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/midland_africa" className="contact-info__social" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://x.com/midland_africa" className="contact-info__social" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61577943440667&_rdc=1&_rdr" className="contact-info__social" aria-label="GitHub">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
