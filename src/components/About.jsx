import {
  GraduationCap,
  MapPin,
  Code2,
  Rocket,
  ArrowRight
} from "lucide-react";

function About() {
  return (
    <section id="about" className="section">
      <div className="section-container">

        <div className="section-heading">
          <span>01. ABOUT ME</span>
          <h2>Turning ideas into <strong>digital experiences</strong></h2>
        </div>

        <div className="about-grid">

          <div className="about-content">
            <p>
              I'm a passionate MERN Stack Developer who enjoys building
              modern and user-friendly web applications.
            </p>

            <p>
              My development journey started with frontend technologies
              and gradually expanded into backend development, APIs,
              databases and full-stack application architecture.
            </p>

            <p>
              I focus on writing clean code, creating responsive
              interfaces and continuously learning new technologies.
            </p>

            <a href="#contact" className="text-btn">
              Let's work together
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="about-info">

            <div className="info-card">
              <div className="info-icon">
                <MapPin />
              </div>
              <div>
                <span>Location</span>
                <h3>Greater Noida, India</h3>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <GraduationCap />
              </div>
              <div>
                <span>Education</span>
                <h3>B.Tech Computer Science</h3>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Code2 />
              </div>
              <div>
                <span>Specialization</span>
                <h3>MERN Stack Development</h3>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Rocket />
              </div>
              <div>
                <span>Focus</span>
                <h3>Full Stack Web Applications & Generative AI</h3>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;