import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { BarChart3, Zap, Leaf, Shield, ArrowRight } from "lucide-react"
import "../styles/pages/about.scss"
import solarPanel from "../assets/hello-world-featured.jpg"
import { StatItem } from "./Home"
import inverter from "../assets/inverter.jpg"
import solarboy from "../assets/solar-boy.jpg"
import solarConstruction from "../assets/solar-construction.jpg"

export function About() {
const stats = [
    { label: "Years of Experience", value: "5+" },
    { label: "Team Members", value: "20+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Project Completed", value: "50+" },
  ]

  return (
    <div className="about-page">
      {/* --- SEO TAGS --- */}
      <title>About Midland Africa | Leaders in Sustainable Energy & Construction</title>
      <meta 
        name="description" 
        content="Discover Midland Africa's mission to power Nigeria. We specialize in innovative renewable energy and sustainable construction solutions, helping homes and businesses thrive." 
      />
      <meta name="keywords" content="About Midland Energies, sustainable construction Nigeria, renewable energy experts Lagos, solar power mission Africa" />
      
      {/* Social Media Previews */}
      <meta property="og:title" content="Our Story | Midland Africa" />
      <meta property="og:description" content="Providing top-tier energy projects and sustainable construction across Nigeria." />
      <meta property="og:type" content="website" />

      <Header />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__container">
          <h1 className="about-hero__title">About Us</h1>
          <p className="about-hero__subtitle">
            Learn about our mission, values, and the team behind MidlandAfrica's sustainable solutions
          </p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="company-overview">
        <div className="company-overview__container">
          <div className="company-overview__content">
            <div className="company-overview__image">
              <img src={solarPanel} alt="Solar Panel Building" />
            </div>

            <div className="company-overview__text">
              <div className="company-overview__tag">What we do?</div>
              <h2 className="company-overview__title">Company's Overview</h2>

              <p className="company-overview__paragraph">
                At Midlandafrica, our mission is to drive the adoption of renewable energy by delivering customized solar solutions. 
                We are comited to empowering individuals and businesses to embrace sustainability through innovation and expertise.
              </p>

              <p className="company-overview__paragraph">
                We are a sustainable energy and construction company that focuses on developing, producing, and distributing 
                renewable energy solutions that reduce environmental impact while promoting long-term energy security. We leverage 
                cutting-edge technology and innovation to harness energy from natural resources such as the sun, wind, water, and biomass.
              </p>

              <button className="company-overview__button">Contact us Today</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stat-container">
            {stats.map((stat, index) => (
              <StatItem
               key={index}
               label={stat.label}
               value={stat.value}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="values__container">
          <div className="values__header">
            <div className="values__tag">What we do?</div>
            <h2 className="values__title">Our Values</h2>
            <p className="values__subtitle">
              These core principles guide everything we do at MidlandAfrica, from how we design our solutions to how we
              interact with our clients and communities.
            </p>
          </div>

          <div className="values__grid">
            <div className="values__card">
              <div className="values__icon">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="values__card-title">Data-Driven</h3>
              <p className="values__card-text">
                We use data and analytics to inform our decisions and drive innovation that maximizes efficiency and
                performance.
              </p>
            </div>

            <div className="values__card">
              <div className="values__icon">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="values__card-title">Innovation</h3>
              <p className="values__card-text">
                We constantly explore new technologies and approaches to stay at the forefront of the renewable energy
                industry.
              </p>
            </div>

            <div className="values__card">
              <div className="values__icon">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="values__card-title">Sustainability</h3>
              <p className="values__card-text">
                We're committed to environmental stewardship and creating solutions that minimize ecological impact.
              </p>
            </div>

            <div className="values__card">
              <div className="values__icon">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="values__card-title">Integrity</h3>
              <p className="values__card-text">
                We operate with honesty, transparency, and accountability in doing what's right for our clients and the
                planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      {/* <section className="leadership">
        <div className="leadership__container">
          <div className="leadership__header">
            <div className="leadership__tag">Meet our Team</div>
            <h2 className="leadership__title">Our Leadership Team</h2>
            <p className="leadership__subtitle">
              Meet the experts behind MidlandAfrica's success, bringing decades of combined experience in renewable
              energy and sustainable construction.
            </p>
          </div>

          <div className="leadership__grid">
            <div className="leadership__card">
              <div className="leadership__image">
                <img src="/professional-businessman-in-glasses.jpg" alt="Robert Johnson" />
              </div>
              <h3 className="leadership__name">Robert Johnson</h3>
              <p className="leadership__role">CEO & Founder</p>
              <p className="leadership__bio">
                With over 25 years of experience in renewable energy, Robert leads our mission to create a more
                sustainable future.
              </p>
            </div>

            <div className="leadership__card">
              <div className="leadership__image">
                <img src="/professional-businesswoman-engineer.jpg" alt="Sarah Williams" />
              </div>
              <h3 className="leadership__name">Sarah Williams</h3>
              <p className="leadership__role">Lead Engineer</p>
              <p className="leadership__bio">
                Sarah's engineering expertise and innovative thinking drive our technical solutions and product
                development.
              </p>
            </div>

            <div className="leadership__card">
              <div className="leadership__image">
                <img src="/professional-businessman-portrait.png" alt="Michael Chen" />
              </div>
              <h3 className="leadership__name">Michael Chen</h3>
              <p className="leadership__role">Director of Operations</p>
              <p className="leadership__bio">
                Michael ensures our operations run smoothly and efficiently, maintaining our high standards of quality.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Preview Section */}
      <section className="services-preview">
        <div className="services-preview__container">
          <div className="services-preview__header">
            <div className="services-preview__tag">What we do</div>
            <h2 className="services-preview__title">Our Services</h2>
            <p className="services-preview__subtitle">
              We offer a comprehensive range of sustainable energy and construction services to meet the diverse needs
              of our clients.
            </p>
          </div>

          <div className="services-preview__grid">
            <div className="services-preview__card">
              <div className="services-preview__image">
                <img src={solarboy} alt="Solar Installations" />
              </div>
              <div className="services-preview__content">
                <h3 className="services-preview__card-title">Solar Installations</h3>
                <p className="services-preview__card-text">
                  Professional solar panel installation for residential and commercial properties, designed to maximize
                  energy production and efficiency.
                </p>
                <a href="#" className="services-preview__link">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="services-preview__card">
              <div className="services-preview__image">
                <img src={solarConstruction} alt="Commercial Construction" />
              </div>
              <div className="services-preview__content">
                <h3 className="services-preview__card-title">"Energy Consulting"</h3>
                <p className="services-preview__card-text">
                  "We assess your current energy consumption and renewable energy strategies for residential and commercial clients",
                </p>
                <a href="#" className="services-preview__link">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="services-preview__card">
              <div className="services-preview__image">
                <img src={inverter} alt="Residential Construction" />
              </div>
              <div className="services-preview__content">
                <h3 className="services-preview__card-title">"Battery Storage Solution"</h3>
                <p className="services-preview__card-text">
                  Advanced battery storage systems that seamlessly self consumption and provide reliable backup power during outages.
                </p>
                <a href="#" className="services-preview__link">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta__container">
          <h2 className="about-cta__title">Let's Build a Sustainable Future Together</h2>
          <p className="about-cta__text">
            Ready to start your journey towards sustainability? Contact us today to discuss your project.
          </p>
          <button>Contact Us Today</button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
