import { ArrowRight, ChevronDown, Star, UserCheck } from "lucide-react"
import "../styles/pages/home.scss"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import solarConstruction from "../assets/solar-construction.jpg"
import solarPanel from "../assets/solar-panel.jpg"
import client from "../assets/customer.png"
import inverter from "../assets/inverter.jpg"
import solarboy from "../assets/solar-boy.jpg"
import proj2 from "../assets/IMAGE 15.jpg"
import proj3 from "../assets/IMAGE 18.jpg"
import proj4 from "../assets/IMAGE 9.jpg"
import { useEffect, useState } from "react"
import slide1 from "../assets/hello-world-featured.jpg"
import slide2 from "../assets/02a72a68-c549-405a-81ae-11530fdac69c.jpg"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"
import { NavLink } from "react-router-dom"
import steamaco from "../assets/SteamaCo+logo.webp"
import earthBond from "../assets/earthbond2.png"
import geoRenz from "../assets/GeoRenz-logo.jpg"
import keyfield from "../assets/keyfield.jpg"
import img11 from "../assets/IMAGE 11.jpg"
import img13 from "../assets/IMAGE 13.jpg"

type StatItemProps = {
  label: string
  value: string
}

export function StatItem({ label, value }: StatItemProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const endValue = parseInt(value.replace(/\D/g, ""))
  const suffix = value.replace(/[0-9]/g, "")

  return (
    <div ref={ref} className="stats__item text-center">
      <div className="stats__label">{label}</div>
      <div className="stats__value">
        {inView ? (
          <CountUp end={endValue} suffix={suffix} duration={2} />
        ) : (
          "0"
        )}
      </div>
    </div>
  )
}

function App() {
  const heroImages = [solarPanel, slide1, slide2]
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const stats = [
    { label: "Years of Experience", value: "5+" },
    { label: "Team Members", value: "20+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Project Completed", value: "50+" },
  ]

  const services = [
    {
      title: "Solar Installations",
      description:
        "From residential rooftops to large-scale commercial properties, designed to maximize energy production and efficiency",
      image: solarConstruction,
    },
    {
      title: "Energy Consulting",
      description:
        "We assess your current energy consumption and renewable energy strategies for residential and commercial clients",
      image: solarboy,
    },
    {
      title: "Battery Storage Solution",
      description:
        "Advanced battery storage systems that seamlessly self consumption and provide reliable backup power during outages",
      image: inverter,
    },
  ]

  const projects = [
    {
      title: "Essential power pack",
      description: "Lighting points, Standing/Wall-mount/Ceiling Fan, LED/LCD Television, Decoder/Receiver, Phone/Laptop Charging",
      image: proj4,
      badge: "Energy",
    },
    {
      title: "Double Boost System",
      description: "Small (Energy Efficient) Washing Machine, Standing/Wall-mount/Ceiling Fan, LED/LCD Television, Small Blender, Small (Energy Efficient) Fridge, Lighting Points, Phone/Laptop Charging",
      image: proj2,
      badge: "Energy",
    },
    {
      title: "Smart Lite Solution",
      description: "Small Electric kettle, Medium Size Blender, Medium Size (Energy Efficient) Fridge, Medium Size (Energy Efficient) Washing Machine, 1hp Air Conditioner",
      image: proj3,
      badge: "Energy",
    },
    {
      title: "Comfort Zone Power",
      description: "Small Electric kettle, Medium Size Blender, Medium Size (Energy Efficient) Fridge, Medium Size (Energy Efficient) Washing Machine, 1hp Air Conditioner",
      image: img11,
      badge: "Energy",
    },
    {
      title: "Reliable Energy Hub",
      description: "Medium Size Electric kettle, Medium Size Blender, Big Size (Energy Efficient) Fridge, Big Size (Energy Efficient) Washing Machine, 1.5hp Air Conditioner, Medium Size Microwave Oven",
      image: inverter,
      badge: "Energy",
    },
    {
      title: "Power Pro Max",
      description: "Medium Electric kettle, Medium Size Blender, Big Size (Energy Efficient) Fridge, Big Size (Energy Efficient) Washing Machine, 1.5hp Air Conditioner, Medium Size Microwave Oven",
      image: img13,
      badge: "Energy",
    },
  ]

  const testimonials = [
    {
      name: "Gift Apatha",
      title: "AG events and makeover",
      image: client,
      quote:
        "MidlandAfrica solar solution at the business mall transformed our business. We've cut our energy costs by 60% and also have steady power to improved our work efficiency.",
      rating: 5,
    },
    {
      name: "Orobosa Williams",
      title: "Hair Stylist",
      image: client,
      quote:
        "Midland solar solution has help reduced the money spent fueling genetator on daily basis, thereby making his business more profitaable.",
      rating: 5,
    },
    {
      name: "Favour",
      title: "Hair by favour",
      image: client,
      quote:
        "Midland's solar solution in her business mall has given me leverage to work for longer hours and attend to more customers compared to using generators which has been less reliable.",
      rating: 5,
    }
  ]

  const partners = [
    {
      name: "Steamaco",
      image: steamaco,
    },
    {
      name: "GeoRenz",
      image: earthBond,
    },
    {
      name: "Earthbond",
      image: geoRenz,
    },
    {
      name: "Keyfield Electrical & Energy Limited",
      image: keyfield,
    }
  ]

  return (
    <main className="home">
      <Header />

      {/* Hero Section */}
      <title>Midland Energies | Sustainable Power Solutions</title>
      <meta name="description" content="Leading the transition to clean energy in Africa with innovative solar and wind projects." />
      
      <section className="hero" id="home">
        <div className="hero__background">
          {heroImages.map((image, index) => (
            <img key={index} src={image} alt="Hero background" className={`hero__slide ${index === currentSlide ? "active" : ""}`}/>
          ))}
          <div className="hero__overlay" />
        </div>


        <div className="hero__content">
          <div className="hero__badge">
            <span className="text-primary-foreground text-sm font-medium">MidlandAfrica</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground max-w-4xl mx-auto text-balance leading-tight">
            Powering a Sustainable Future
          </h1>

          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto text-pretty">
            Solar solutions and smart energy management tailored for homes and businesses
          </p>

          <div className="hero__buttons">
            <button className="hero-btn1">
            <NavLink className="links" to={"/contact"}>
                Get a Free Consultation
            </NavLink>
          </button>
          <button className="hero-btn2">
            <NavLink className="links" to={"/projects"}>
              View Our Projects
            </NavLink>
          </button>
          </div>

          <div className="hero__scroll">
            <span className="text-primary-foreground text-sm">Scroll Down</span>
            <ChevronDown className="w-6 h-6 text-primary-foreground animate-bounce" />
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

      <section className="stats">
        <div className="pat">
          <span><p>Our Partners</p> </span>
        </div>
        <div className="container">
          <div className="partners-slider">
            <div className="partners-track">
              {[...partners, ...partners].map((partner, index) => (
                <div className="partners-div" key={index}>
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="partners"
                  />
                </div>
              ))}
            </div>
         </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="services__header">
            <div className="services__tag"><p>What we do</p></div>
            <h2 className="services__title text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
            <p className="services__description text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive sustainable energy solutions and decarbonization services tailored to your
              specific needs
            </p>
          </div>

          <div className="services__grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="col">
                <div className="card h-100 overflow-hidden shadow-sm hover-shadow">
    
                  {/* Image */}
                  <div className="ratio ratio-16x9">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-img-top object-fit-cover"
                  />
                </div>

                {/* Body */}
                <div className="card-body d-flex flex-column">
                   <h5 className="card-title">{service.title}</h5>
                   <p className="card-text text-muted">
                   {service.description}
                   </p>

                   {/* Button */}
                   <button className="btn-link">
                     Learn More <ArrowRight size={16} />
                   </button>
                </div>

              </div>
              </div>
            ))}
            </div>
            </div>
      </section>

      {/* About Section */}
      <section className="about py-20 bg-background" id="about">
        <div className="container mx-auto px-4">
          <div className="about__grid grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="about__content space-y-6">
              <div className="space-y-4">
                <div className="about__tag"><p>Who we are</p></div>
                <h2 className="about__title text-3xl md:text-4xl font-bold text-foreground text-balance">
                  Committed to a Sustainable Future
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  At MidlandAfrica, we're dedicated to driving the transition to sustainable energy through innovative
                  solutions and eco-friendly construction practices. Our mission is to create a greener future for
                  generations to come.
                </p>
                <p>
                  With a team of experienced engineers and specialists, we deliver high-quality services tailored to
                  meet the unique needs of each client, whether residential or commercial.
                </p>
              </div>

              <button className="prj-btn">
                <NavLink className="links" style={{color: "white"}} to={"/about"}>
                  Learn More About Us
                </NavLink>
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="about-img-cont">
             <div className="about__image">
              <img
                src={solarPanel}
                alt="Solar panels in field"
                className="w-full h-full object-cover"
              />
             </div>
             <div className="about__image">
              <img
                src={solarPanel}
                alt="Solar panels in field"
                className="w-full h-full object-cover"
              />
             </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects py-20 bg-muted/30" id="projects">
        <div className="container mx-auto px-4">
          <div className="projects__header text-center space-y-4 mb-12">
            <div className="projects__tag"><p>Our Solutions</p></div>
            <p className="projects__description text-muted-foreground max-w-2xl mx-auto">
              Affordable packages designed for every energy need
            </p>
          </div>

          <div className="projects__grid mb-8">
            {projects.map((project, index) => (
              <div key={index} className="col">
  <div className="card h-100 overflow-hidden shadow-sm hover-shadow bg-white">

    {/* Image wrapper */}
    <div className="position-relative">
      <img
        src={project.image}
        alt={project.title}
        className="card-img-top object-fit-cover"
        style={{ height: "260px" }}
      />

      {/* Badge */}
      <span className="position-absolute top-0 start-0 m-3 badge rounded-pill bg-warning text-dark fw-semibold">
        {project.badge}
      </span>
    </div>

    {/* Content */}
    <div className="card-body p-3">
      <h3 className="card-title fs-5 fw-bold projects__title">
        {project.title}
      </h3>
      <ul className="projects__features">
        {project.description.split(",").map((item, i) => (
          <li key={i}>{item.trim()}</li>
        ))}
      </ul>
    </div>

  </div>
</div>

            ))}
          </div>

          <div className="projects__buttons">
            <button className="prj-btn">
              <NavLink className="links" style={{color: "white"}} to={"/projects"}>
                View Energy Projects
              </NavLink>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="testimonials__header">
            <div className="testimonials__tag">
              <p>Testimonials</p> 
            </div>
            <h2 className="testimonials__title text-3xl md:text-4xl font-bold text-foreground">What Our Clients Say</h2>
            <p className="testimonials__description text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Hear from businesses and homeowners who have experienced the
              MidlandAfrica difference
            </p>
          </div>

          <div className="testimonials__grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {testimonials.map((testimonial, index) => (
              <div key={index} className="col">
              <div className="card h-100 bg-white shadow-sm p-3">

              {/* Stars */}
              <div className="mb-2 d-flex gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" className="text-warning" />
              ))}
              </div>

              {/* Quote */}
              <p className="fst-italic text-muted testimonials__quote">
               "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="d-flex align-items-center gap-3 pt-3">
              <div style={{ width: "48px", height: "48px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="fw-semibold">{testimonial.name}</div>
                <div className="small text-muted">{testimonial.title}</div>
              </div>
            </div>
           </div>
          </div>
         ))}  
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="cta__title text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
            Ready to Start Your Sustainable Journey?
          </h2>
          <p className="cta__description text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Contact us today for a free consultation and discover how we can help you harness the power of renewable
            energy
          </p>
          <button className="consultation">
            <NavLink className="links" to={"/contact"}>
                Get a Free Consultation
            </NavLink>
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default App
