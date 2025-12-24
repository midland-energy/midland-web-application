import { ArrowRight, ChevronDown, Star } from "lucide-react"
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
      title: "Residential Solar Installation",
      description: "Providing clean energy to over 50 homes in the suburban area",
      image: proj4,
      badge: "Energy",
    },
    {
      title: "Community Solar Hub",
      description: "A shared solar facility that provides renewable energy to local residents",
      image: proj2,
      badge: "Energy",
    },
    {
      title: "Commercial Solar Array",
      description: "Large-scale solar installation powering business complex",
      image: proj3,
      badge: "Energy",
    },
  ]

  const testimonials = [
    {
      name: "Michael Johnson",
      title: "CEO, Greenfield Solutions",
      image: client,
      quote:
        "MidlandAfrica transformed our business with their solar installation. We've cut our energy costs by 60% and our carbon footprint is significantly reduced.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      title: "Sustainability Director, Eco Innovations",
      image: client,
      quote:
        "The team's attention to detail and commitment to quality was impressive. They delivered exactly what was promised on time and within budget.",
      rating: 5,
    },
    {
      name: "David Chen",
      title: "Operations Manager, Sunrise Corp",
      image: client,
      quote:
        "From consultation to installation, the process was seamless. Our team is now powered almost entirely by renewable energy thanks to MidlandAfrica.",
      rating: 5,
    },
    {
      name: "David Chen",
      title: "Operations Manager, Sunrise Corp",
      image: client,
      quote:
        "From consultation to installation, the process was seamless. Our team is now powered almost entirely by renewable energy thanks to MidlandAfrica.",
      rating: 5,
    },
    {
      name: "David Chen",
      title: "Operations Manager, Sunrise Corp",
      image: client,
      quote:
        "From consultation to installation, the process was seamless. Our team is now powered almost entirely by renewable energy thanks to MidlandAfrica.",
      rating: 5,
    },
    {
      name: "David Chen",
      title: "Operations Manager, Sunrise Corp",
      image: client,
      quote:
        "From consultation to installation, the process was seamless. Our team is now powered almost entirely by renewable energy thanks to MidlandAfrica.",
      rating: 5,
    },
  ]

  return (
    <main className="home">
      <Header />

      {/* Hero Section */}
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
            <div className="projects__tag"><p>Projects</p></div>
            <h2 className="projects__title text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
            <p className="projects__description text-muted-foreground max-w-2xl mx-auto">
              Explore some of our most impactful work in sustainable energy and construction
            </p>
          </div>

          <div className="projects__grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
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
      <p className="card-text text-muted small projects__description mb-0">
        {project.description}
      </p>
    </div>

  </div>
</div>

            ))}
          </div>

          <div className="projects__buttons">
            <button className="prj-btn">View Energy Projects</button>
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
                <Star key={i} size={18} className="text-warning" />
              ))}
              </div>

              {/* Quote */}
              <p className="fst-italic text-muted testimonials__quote">
               "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="d-flex align-items-center gap-3 pt-3">
              <div className="rounded-circle overflow-hidden" style={{ width: "48px", height: "48px" }}>
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-100 h-100 object-fit-cover"
              />
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
