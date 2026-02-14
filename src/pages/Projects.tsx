import { useState } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import "../styles/pages/projects.scss"
import proj1 from "../assets/02a72a68-c549-405a-81ae-11530fdac69c.jpg"
import proj2 from "../assets/IMAGE 9.jpg"
import proj3 from "../assets/IMAGE 10.jpg"
import proj4 from "../assets/IMAGE 11.jpg"
import proj5 from "../assets/IMAGE 13.jpg"
import proj6 from "../assets/IMAGE 15.jpg"

type ProjectCategory = "All Projects" | "Residential" | "Commercial" | "Community"

interface Project {
  id: number
  title: string
  description: string
  category: Exclude<ProjectCategory, "All Projects">
  image: string
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All Projects")

  const projects: Project[] = [
    {
      id: 1,
      title: "Commercial Solar Installation",
      description: "Solar panel installation for a shopping mall in Benin City, reducing energy costs by 60%.",
      category: "Commercial",
      image: proj1,
    },
    {
      id: 2,
      title: "Residential Solar Installation",
      description: "Complete Solar installation for a house hold in Benin City.",
      category: "Residential",
      image: proj2,
    },
    {
      id: 3,
      title: "Residential Solar inverter",
      description: "Large-scale solar installation for a manufacturing facility, meeting 80% of their energy needs.",
      category: "Residential",
      image: proj3,
    },
    {
      id: 4,
      title: "School Solar Project",
      description: "Solar inverter solution at a private school in Edo state.",
      category: "Community",
      image: proj4,
    },
    {
      id: 5,
      title: "Home Solar System",
      description: "Custom solar installation with battery storage for a high-end residential property.",
      category: "Residential",
      image: proj5,
    },
    {
      id: 6,
      title: "Office Building Retrofit",
      description: "Solar solution for an existing office building, improving energy efficiency.",
      category: "Commercial",
      image: proj6,
    },
  ]

  const filters: ProjectCategory[] = ["All Projects", "Residential", "Commercial", "Community"]

  const filteredProjects =
    activeFilter === "All Projects" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="projects-page">
      <Header />

      {/* Hero Section */}
      <section className="projects-hero">
        <div className="projects-hero__content">
          <h1 className="projects-hero__title">Energy Projects</h1>
          <p className="projects-hero__subtitle">
            Explore our portfolio of solar installations and renewable energy solutions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="projects-filter">
        <div className="projects-filter__container">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`projects-filter__btn ${activeFilter === filter ? "projects-filter__btn--active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid">
        <div className="projects-grid__container">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card__image-wrapper">
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-card__image" />
                <div className="project-card__overlay">
                  <span className="project-card__badge">{project.category}</span>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="projects-impact">
        <div className="projects-impact__header">
          <span className="projects-impact__label">Workdone</span>
          <h2 className="projects-impact__title">Our Impact</h2>
          <p className="projects-impact__subtitle">
            Through our energy projects, we've made a significant positive impact on the environment and our clients'
            bottomline
          </p>
        </div>

        <div className="projects-impact__stats">
          <div className="impact-stat">
            <div className="impact-stat__value">500kW+</div>
            <div className="impact-stat__label">Total Solar Capacity Installed</div>
          </div>
          <div className="impact-stat">
            <div className="impact-stat__value">15,000+</div>
            <div className="impact-stat__label">Metric Tons of CO₂ Offset Annually</div>
          </div>
          <div className="impact-stat">
            <div className="impact-stat__value">50+</div>
            <div className="impact-stat__label">Energy Projects Completed</div>
          </div>
          <div className="impact-stat">
            <div className="impact-stat__value">30%</div>
            <div className="impact-stat__label">Average Client Energy Cost Reduction</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="projects-cta__content">
          <h2 className="projects-cta__title">Ready to Harness the Power of Solar?</h2>
          <p className="projects-cta__subtitle">
            Contact us today to discuss your energy project and join our growing list of satisfied clients
          </p>
          <button className="projects-cta__btn">Get Started Today</button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
